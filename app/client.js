
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cldwecptqcxmoneaevcp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZHdlY3B0cWN4bW9uZWFldmNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MDkxMzksImV4cCI6MjA0OTA4NTEzOX0.QMuagiY7q8TPLFlnDTh1gNOTzEFNaR6gYJj57O5uw_s"
export const supabase = createClient(supabaseUrl, supabaseKey)
// console.log(supabaseKey)
// console.log("hello")