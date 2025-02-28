import supabase from './supabase';

export async function getPlaces() {
  const { data, error } = await supabase.from('places').select('*');

  if (error) {
    console.error(error);
    throw new Error('Places could not be loaded');
  }

  return data;
}
