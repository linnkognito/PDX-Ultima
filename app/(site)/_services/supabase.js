import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://wiutvoyxphqqwolipruf.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdXR2b3l4cGhxcXdvbGlwcnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDg4NTYsImV4cCI6MjA1NTUyNDg1Nn0.gFwttabezrWZaijzeMRXrZZ3XiwT-zWGc9-vJYkDweQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
