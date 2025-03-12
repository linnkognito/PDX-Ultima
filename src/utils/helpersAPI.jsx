import { supabaseUrl } from '../services/supabase';

export function generateImageName(imageName) {
  return `${Math.random()}-${imageName}`.replaceAll('/', '');
}

export function getImagePath(bucket, imageName) {
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${imageName}`;
}
