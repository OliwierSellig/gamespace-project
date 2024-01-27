import { useQuery } from "@tanstack/react-query";
import { fetchGamesProps } from "../utils/types";
import { fetchGames } from "../lib/games";

export function useGames(props: fetchGamesProps) {
  const {
    isLoading,
    isSuccess,
    data: games,
    error,
  } = useQuery({
    queryKey: ["games", props],
    queryFn: () => fetchGames({ ...props }),
  });

  return { isLoading, games, error, isSuccess };
}
