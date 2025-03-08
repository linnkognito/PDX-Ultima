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

export async function deleteGuide(id) {
  const { data, error } = await supabase.from('guides').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error(`Couldn't delete the guide for some reason.`);
  }

  return data;
}
