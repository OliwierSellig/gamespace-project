import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../lib/genres";

export function useGenres() {
  const {
    isLoading,
    data: genres,
    error,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: () => fetchGenres({ page: 1, pageSize: 20 }),
  });

  return { isLoading, genres, error };
}
