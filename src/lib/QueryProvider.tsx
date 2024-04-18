"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ChildrenProp } from "../utils/types/types";
import { AuthProvider } from "../contexts/AuthContext";

function Providers({ children }: ChildrenProp) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 20 * 1000, refetchInterval: 20 * 1000 },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}

export default Providers;
