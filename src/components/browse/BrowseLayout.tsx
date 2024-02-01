import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { ChildrenProp } from "../../utils/types";
import BrowseBy from "./BrowseBy";
import { fetchDevelopers } from "../../lib/developers";
import { fetchPlatforms } from "../../lib/platfroms";
import { fetchGenres } from "../../lib/genres";

async function BrowseLayout({ children }: ChildrenProp) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [
      "developers",
      {
        pageSize: 20,
        page: 1,
      },
    ],
    queryFn: () => fetchDevelopers({ pageSize: 20, page: 1 }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["genres", { pageSize: 20, page: 1 }],
    queryFn: () => fetchGenres({ pageSize: 20, page: 1 }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["platforms", { pageSize: 20, page: 1 }],
    queryFn: () => fetchPlatforms({ pageSize: 20, page: 1 }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BrowseBy />
      {children}
    </HydrationBoundary>
  );
}

export default BrowseLayout;
