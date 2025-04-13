import { generateImageName, getImagePath } from '../utils/helpersAPI';
import supabase from './supabase';

export async function getPlaces({ filter, sortBy }) {
  let query = supabase.from('places').select('*');

  // Filter
  if (filter) query = query[filter.method || 'eq'](filter.field, filter.value);

  // Sort
  if (sortBy)
    query.order(sortBy.field, { ascending: sortBy.direction === 'asc' });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Places could not be loaded');
  }

  return data;
}

export async function getPlace(id) {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Place not found');
  }

  return data;
}

export async function createPlace(newPlace) {
  const imageName = generateImageName(newPlace.image.name);
  const imagePath = getImagePath('places-images', imageName);

  // Place object
  const { data, error } = await supabase
    .from('places')
    .insert([{ ...newPlace, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error(`Something went wrong when creating the new place`);
  }

  // Image
  const { error: storageError } = await supabase.storage
    .from('places-images')
    .upload(imageName, newPlace.image);

  // Error handling image upload
  if (storageError) {
    console.error(storageError);
    throw new Error(`Something went wrong trying to upload the Place's image`);
  }

  return data;
}

export async function deletePlace(id) {
  const { data, error } = await supabase.from('places').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error(`Couldn't delete the place for some reason.`);
  }

  return data;
}
export async function updatePlace(id, updatedPlace) {
  const imageName = generateImageName(updatedPlace.image.name);
  const imagePath = getImagePath('places-images', imageName);

  // Place object
  const { data, error } = await supabase
    .from('places')
    .update({ ...updatedPlace, image: imagePath })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(`Something went wrong when updating the place`);
  }

  // Image
  const { error: storageError } = await supabase.storage
    .from('places-images')
    .upload(imageName, updatedPlace.image);

  // Error handling image upload
  if (storageError) {
    console.error(storageError);
    throw new Error(`Something went wrong trying to upload the Place's image`);
  }

  return data;
}
