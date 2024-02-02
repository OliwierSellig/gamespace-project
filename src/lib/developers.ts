import { API_KEY } from "../utils/data";
import { fetchedParentProps, fetchedParentType } from "../utils/types";

export async function fetchDevelopers({ pageSize, page }: fetchedParentProps) {
  const query = `?${pageSize ? `page_size=${pageSize}&` : ""}${
    page ? `page=${page}&` : ""
  }key=${API_KEY}`;

  try {
    const res = await fetch(`https://api.rawg.io/api/developers${query}`);
    const data = await res.json();
    const results: fetchedParentType = data;

    console.log(results);

    return results;
  } catch (error) {
    console.error(error.message);
  }
}
