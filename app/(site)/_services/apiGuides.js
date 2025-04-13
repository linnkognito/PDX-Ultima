import { createClient } from '@supabase/supabase-js';
import { generateImageName, getImagePath } from '../_utils/helpersAPI';

// Initialize Supabase client
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch data from a Supabase table
export async function getGuides() {
  const { data, error } = await supabase.from(tableName).select('*');

  if (error) {
    console.error('Error fetching guides:', error);
    return null;
  }

  return data;
}

export async function getGuideById(id) {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching guide:', error);
    return null;
  }

  return data;
}

export async function createGuide(newGuide) {
  const imageName = generateImageName(newGuide.image.name);

  const { error: storageError } = await supabase.storage
    .from('guides-images')
    .upload(imageName, newGuide.image);

  if (storageError) {
    console.error('Error uploading image:', storageError);
    return { data: null, error: 'Image upload failed' };
  }

  const { data, error } = await supabase
    .from('guides')
    .insert([{ ...newGuide, image: imageName }]);

  if (error) {
    console.error('Error creating guide:', error);
    return { data: null, error: 'Guide creation failed' };
  }

  return { data, error: null };
}

export async function updateGuide(id, updatedGuide) {
  if (!id) return { data: null, error: 'Guide ID is required' };

  const hasImagePath = updatedGuide.image?.startsWith?.(supabaseUrl);
  let imageName = null;
  let imagePath = updatedGuide.image;

  if (!hasImagePath) {
    imageName = generateImageName(updatedGuide.image.name);
    imagePath = getImagePath('guides-images', imageName);

    const { error: storageError } = await supabase.storage
      .from('guides-images')
      .upload(imageName, updatedGuide.image);

    if (storageError) {
      console.error('Error uploading image:', storageError);
      return { data: null, error: 'Image upload failed' };
    }
  }

  const { data, error } = await supabase
    .from('guides')
    .update({ ...updatedGuide, image: imagePath })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating guide:', error);
    return { data: null, error: 'Guide update failed' };
  }

  return { data, error: null };
}

export async function deleteGuide(id) {
  if (!id) return { data: null, error: 'Guide ID is required' };

  const { data, error } = await supabase.from('guides').delete().eq('id', id);

  if (error) {
    console.error('Error deleting guide:', error);
    return { data: null, error: 'Guide deletion failed' };
  }

  return { data, error: null };
}
