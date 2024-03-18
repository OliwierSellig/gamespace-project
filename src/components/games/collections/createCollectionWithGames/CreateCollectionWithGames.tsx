import { fetchGameByID } from "../../../../lib/games";
import UpdateCollectionContainer from "../../../global/updateCollectionContainer/updateCollectionContainer/UpdateCollectionContainer";

type CreateCollectionWithGameProps = {
  id: string;
};

async function CreateCollectionWithGames({
  id,
}: CreateCollectionWithGameProps) {
  const game = await fetchGameByID(parseInt(id));

  return (
    <UpdateCollectionContainer
      action={{ type: "add", game }}
      returnDest={`/games/${game.id}`}
    />
  );
}

export default CreateCollectionWithGames;
