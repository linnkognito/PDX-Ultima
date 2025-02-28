import supabase from './supabase';

export async function getGuides() {
  const { data, error } = await supabase.from('guides').select('*');

  if (error) {
    console.error(error);
    throw new Error('Guides could not be loaded');
  }

  return data;
}
