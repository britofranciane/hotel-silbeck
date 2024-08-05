import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mokfkqmrsaesijweddnj.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1va2ZrcW1yc2Flc2lqd2VkZG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNzcyNzksImV4cCI6MjAzNzk1MzI3OX0.h9E60OQVyH8HW5qxexSeFyUHDxRAlZ3yj0MD9hhRMyE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
