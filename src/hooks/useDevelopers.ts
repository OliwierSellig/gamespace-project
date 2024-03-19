import { useQuery } from "@tanstack/react-query";
import { fetchedParentProps } from "../utils/types/types";
import { fetchDevelopers } from "../lib/developers";

export function useDevelopers(props: fetchedParentProps) {
  const {
    isLoading,
    data: developers,
    error,
  } = useQuery({
    queryKey: ["developers", props],
    queryFn: () => fetchDevelopers({ ...props }),
  });

  return { isLoading, developers, error };
}
