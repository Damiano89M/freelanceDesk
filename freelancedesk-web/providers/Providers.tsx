'use client'
import { QueryClientProvider } from "@tanstack/react-query";
import { quesryClient } from "../lib/query-client";

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={quesryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
