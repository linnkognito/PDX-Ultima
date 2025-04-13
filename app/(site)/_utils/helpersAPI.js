import { supabaseUrl } from '../services/supabase';

// Images //
export function generateImageName(imageName) {
  return `${crypto.randomUUID()}-${imageName}`.replaceAll('/', '');
}
export function getImagePath(bucket, imageName) {
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${encodeURIComponent(
    imageName
  )}`;
}
