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
  const { data, error } = await supabase.from('places').insert([newPlace]);

  if (error) {
    console.error(error);
    throw new Error(`Something went wrong when creating the new place`);
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
