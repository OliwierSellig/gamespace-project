import { useQuery } from "@tanstack/react-query";
import {
  getUserAvatar,
  getUserBackground,
  getUserCreatedAt,
  getUserName,
} from "../firebase/userData";

export function useUserData(
  id: string,
  type: "background" | "avatar" | "name" | "createdAt",
) {
  function getUserFn() {
    switch (type) {
      case "background":
        return getUserBackground;
      case "avatar":
        return getUserAvatar;
      case "name":
        return getUserName;
      case "createdAt":
        return getUserCreatedAt;
      case "background":
        throw new Error("Undefined User Function");
    }
  }
  const userFn = getUserFn();

  const { isLoading, data, error } = useQuery({
    queryKey: [id, type],
    queryFn: () => userFn(id),
  });

  return { isLoading, data, error };
}
