"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ChildrenProp } from "../utils/types/types";
import { ActivitiesProvider } from "../contexts/activitiesContext/ActivitiesContext";
import { CollectionsProvider } from "../contexts/collectionsContext/CollectionsContext";
import { LibraryProvider } from "../contexts/libraryContext/LibraryContext";
import { ReviewsProvider } from "../contexts/reviewsContext/ReviewsContext";
import { UserProvider } from "../contexts/userContext/UserContext";
import { UserModalStatesProvider } from "../contexts/userModalStatesContext/UserModalStatesContext";
import { WishlistProvider } from "../contexts/wishlistContext/WishlistContext";

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
      <UserProvider>
        <UserModalStatesProvider>
          <ActivitiesProvider>
            <WishlistProvider>
              <LibraryProvider>
                <ReviewsProvider>
                  <CollectionsProvider>{children}</CollectionsProvider>
                </ReviewsProvider>
              </LibraryProvider>
            </WishlistProvider>
          </ActivitiesProvider>
        </UserModalStatesProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default Providers;
