import { GameDeveloperType } from "../../../../../utils/types/types";
import EmptyDetails from "../../overview/emptyDetails/EmptyDetails";
import DetailsContentText from "../../overview/detailsConentText/DetailsContentText";

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
