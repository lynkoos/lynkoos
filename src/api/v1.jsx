// src/api/v1.jsx
import { createClient } from '@supabase/supabase-js';

// Coloca tus credenciales de Supabase
const SUPABASE_URL = 'https://vpxkospatecjprzbrmsu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZweGtvc3BhdGVjanByemJybXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwOTgwOTUsImV4cCI6MjAxNzY3NDA5NX0.Lt691BFDiFyJVaz1wlGeNgzOXyiJyKZrH4YzLDsFxrE';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;