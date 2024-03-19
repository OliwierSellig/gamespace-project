import { API_KEY } from "../utils/data/global";
import {
  SinglePlatformType,
  fetchedParentProps,
  fetchedParentType,
} from "../utils/types";

export async function fetchPlatforms({ pageSize, page }: fetchedParentProps) {
  const query = `?${pageSize ? `page_size=${pageSize}&` : ""}${
    page ? `page=${page}&` : ""
  }key=${API_KEY}`;

  try {
    const res = await fetch(`https://api.rawg.io/api/platforms${query}`);
    const data = await res.json();
    const results: fetchedParentType = data;

    return results;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchPlatformById(id: number) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/platforms/${id}?key=${API_KEY}`
    );
    const data = await res.json();
    const results: SinglePlatformType = data;

    return results;
  } catch (error) {
    console.error(error.message);
  }
}
