import { useQuery } from "@tanstack/react-query";
import { listUserRecentImagsAsUrl } from "../firebase/userData";

export function usePreviousImages(props: {
  id: string;
  type: "avatar" | "background";
}) {
  const {
    isLoading,
    data: previousImages,
    error,
  } = useQuery({
    queryKey: ["previousImages", props.id, props.type],
    queryFn: () => listUserRecentImagsAsUrl({ type: props.type, id: props.id }),
  });

  return { isLoading, previousImages, error };
}
