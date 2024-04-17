type RandomUserProps = { results: { login: { username: string } }[] };
export async function fetchRandomUsers(qty: number = 2) {
  try {
    const res = await fetch(`https://randomuser.me/api/?results=${qty}`);
    const data: RandomUserProps = await res.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
  }
}
