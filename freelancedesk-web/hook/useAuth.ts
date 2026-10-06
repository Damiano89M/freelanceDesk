"use client";

import { useQuery } from "@tanstack/react-query";
import {fetchUser} from "../services/auth";

export function useAuth() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: fetchUser,
    retry: false,
  })
}