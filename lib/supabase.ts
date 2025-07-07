import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fudkmbrulkpyysgqjuml.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZGttYnJ1bGtweXlzZ3FqdW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTU4NzksImV4cCI6MjA2NTE5MTg3OX0.ZcnLivAf3NgVgYExqpLq2Wwsxw82rThlIzp8nj1nOno";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true, 
    persistSession: true,
    detectSessionInUrl: false,
  },
})