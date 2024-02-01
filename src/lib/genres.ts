import { API_KEY } from "../utils/data";
import { fetchedParentType } from "../utils/types";

export async function fetchGenres() {
  try {
    const res = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const data = await res.json();
    const results: fetchedParentType = data;

    return results;
  } catch (error) {
    console.error(error.message);
  }
}
