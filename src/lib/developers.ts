import { API_KEY } from "../utils/data/global";
import {
  SingleDevType,
  fetchedParentProps,
  fetchedParentType,
} from "../utils/types";

export async function fetchDevelopers({ pageSize, page }: fetchedParentProps) {
  const query = `?${pageSize ? `page_size=${pageSize}&` : ""}${
    page ? `page=${page}&` : ""
  }key=${API_KEY}`;

  try {
    const res = await fetch(`https://api.rawg.io/api/developers${query}`);
    const data = await res.json();
    const results: fetchedParentType = data;

    return results;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchDevById(id: number) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/developers/${id}?key=${API_KEY}`
    );
    const data = await res.json();
    const results: SingleDevType = data;

    return results;
  } catch (error) {
    console.error(error.message);
  }
}
