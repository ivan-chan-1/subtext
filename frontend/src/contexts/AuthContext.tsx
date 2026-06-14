import type { Session, User } from "@supabase/supabase-js";
import { createContext } from "react";

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);