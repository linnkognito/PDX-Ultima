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
