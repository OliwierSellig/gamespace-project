import { useQuery } from "@tanstack/react-query";
import { fetchedParentProps } from "../utils/types";
import { fetchGenres } from "../lib/genres";

export function useGenres(props: fetchedParentProps) {
  const {
    isLoading,
    data: genres,
    error,
  } = useQuery({
    queryKey: ["genres", props],
    queryFn: () => fetchGenres({ ...props }),
  });

  return { isLoading, genres, error };
}
