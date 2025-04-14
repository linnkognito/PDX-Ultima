import supabase from './supabase';

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }

  return data;
}

export async function updateSettings(newSettings) {
  const { data, error } = await supabase
    .from('settings')
    .update(newSettings)
    .eq('id', 2)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Failed to update settings, sorry ;(');
  }

  return data;
}
