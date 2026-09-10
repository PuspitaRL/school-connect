const SUPABASE_URL = 'https://jmqqkakursfhbpyzpbwl.supabase.co';

const SUPABASE_KEY = 'sb_publishable_x78NaYPauTN7OcKtXqfytg_Piz2Go2Q';

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
console.log('Supabase siap:', supabaseClient);