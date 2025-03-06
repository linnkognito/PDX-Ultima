import supabase from './supabase';

export async function getPlaces() {
  const { data, error } = await supabase.from('places').select('*');

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
