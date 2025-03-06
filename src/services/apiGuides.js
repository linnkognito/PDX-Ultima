import supabase from './supabase';

export async function getGuides() {
  const { data, error } = await supabase.from('guides').select('*, places(*)');

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
