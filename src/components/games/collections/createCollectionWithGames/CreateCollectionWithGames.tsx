import { fetchGameByID } from "../../../../lib/games";
import CollectionsPropertiesBox from "../../../collections/updateCollectionContainer/CollectionsPropertiesBox";
import UpdateCollectionContainer from "../../../collections/updateCollectionContainer/UpdateCollectionContainer";

type CreateCollectionWithGameProps = {
  id: string;
};

async function CreateCollectionWithGames({
  id,
}: CreateCollectionWithGameProps) {
  const game = await fetchGameByID(parseInt(id));

  return (
    <UpdateCollectionContainer returnDest={`/games/${game.id}`}>
      <CollectionsPropertiesBox action={{ type: "add", game }} />
    </UpdateCollectionContainer>
  );
}

export default CreateCollectionWithGames;
