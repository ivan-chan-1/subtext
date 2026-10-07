import { supabase } from "../lib/supabase";

export const formatTime = (raw: number) => {
  const mins = Math.floor(raw / 60);
  const secs = Math.floor(raw % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const getToken = async () => {
  const res = await supabase.auth.getSession();
  return res.data.session?.access_token;
}

export const formatDate = (ts: string) => {
  return new Date(ts).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })
}