import { generateImageName, getImagePath } from '../utils/helpersAPI';
import supabase, { supabaseUrl } from './supabase';

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
    .select('*, places(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking not found');
  }

  return data;
}

export async function createEditGuide(newGuide, id) {
  console.log(newGuide, id);
  // Image name & path
  const hasImagePath = newGuide.image?.startsWith?.(supabaseUrl);
  const imageName = generateImageName(newGuide.image.name);
  const imagePath = hasImagePath
    ? newGuide.image // supabase url already exists
    : getImagePath('guides-images', imageName);

  let query = supabase.from('guides');

  // Create
  if (!id) query = query.insert([{ ...newGuide, image: imagePath }]);
  // Edit
  if (id) query = query.update({ ...newGuide, image: imagePath }).eq('id', id);

  // Guide object
  const { data, error } = await query.select().single();

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
    throw new Error(
      `Something went wrong when trying to upload the Guide image`
    );
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
