import { GameDeveloperType } from "../../../../utils/types";
import EmptyDetails from "../overview/EmptyDetails";
import DetailsContentText from "../overview/DetailsContentText";

type GameDetailsDevelopers = {
  developer: GameDeveloperType;
};

function GameDetailsDevelopers({ developer }: GameDetailsDevelopers) {
  if (!developer) return <EmptyDetails>No Developer</EmptyDetails>;
  return (
    <DetailsContentText type="link" href={`/search?dev=${developer.id}`}>
      {developer.name}
    </DetailsContentText>
  );
}

export default GameDetailsDevelopers;
