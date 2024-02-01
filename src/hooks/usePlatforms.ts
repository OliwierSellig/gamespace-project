import { useQuery } from "@tanstack/react-query";
import { fetchedParentProps } from "../utils/types";
import { fetchPlatforms } from "../lib/platfroms";

export function usePlatforms(props: fetchedParentProps) {
  const {
    isLoading,
    data: platforms,
    error,
  } = useQuery({
    queryKey: ["platforms", props],
    queryFn: () => fetchPlatforms({ ...props }),
  });

  return { isLoading, platforms, error };
}
