import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase Init:', {
  hasUrl: !!supabaseUrl,
  urlLength: supabaseUrl?.length,
  hasKey: !!supabaseAnonKey,
  keyLength: supabaseAnonKey?.length
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing in .env');
}

export const supabase = createClient(
  supabaseUrl?.trim() || '',
  supabaseAnonKey?.trim() || ''
);
