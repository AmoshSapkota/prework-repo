import { createClient } from '@supabase/supabase-js';
const URL = 'https://tsdbtszboyceedmudphg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZGJ0c3pib3ljZWVkbXVkcGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2Mjc1NDgsImV4cCI6MjA0MDIwMzU0OH0.0fnO-ycn3FFY3ER_i0KyHwNQTQMP0uL2lBlJjP1R0kA';
const supabase = createClient(URL, API_KEY);
export const supabase = createClient(URL, API_KEY);
