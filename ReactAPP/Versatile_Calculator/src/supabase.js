// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ggxxuvpyjbrsyaqnztbx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdneHh1dnB5amJyc3lhcW56dGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1OTE5NjksImV4cCI6MjA4NTE2Nzk2OX0.vRLPSQ2hkainNMLWAoxHeW3LhEW1M25eMEANd71PQBc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);