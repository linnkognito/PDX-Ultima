import { generateImageName, getImagePath } from '../utils/helpersAPI';
import supabase from './supabase';

export async function getGuides() {
  const { data, error } = await supabase.from('guides').select('*');

  if (error) {
    console.error(error);
    throw new Error('Guides could not be loaded');
  }

  return data;
}

export async function getGuide(id) {
  const { data, error } = await supabase
    .from('guides')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking not found');
  }

  return data;
}

export async function createGuide(newGuide) {
  const imageName = generateImageName(newGuide.image.name);
  const imagePath = getImagePath('guides-images', imageName);

  // Guide object
  const { data, error } = await supabase
    .from('guides')
    .insert([{ ...newGuide, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error(`Something went wrong when creating your new guide`);
  }

  // Image
  const { error: storageError } = await supabase.storage
    .from('guides-images')
    .upload(imageName, newGuide.image);

  // Error handling image upload
  if (storageError) {
    console.error(storageError);
    throw new Error(`Something went wrong trying to upload the Guide image`);
  }

  return data;
}

export async function deleteGuide(id) {
  const { data, error } = await supabase.from('guides').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error(`Couldn't delete the guide for some reason.`);
  }

  return data;
}
