"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ChildrenProp } from "../utils/types/types";
import { UserProvider } from "../contexts/UserContext";

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
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
}

export default Providers;
