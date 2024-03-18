import DetailsContentText from "../../overview/detailsConentText/DetailsContentText";
import EmptyDetails from "../../overview/emptyDetails/EmptyDetails";

type GameDetailsReleasedProps = {
  released: string;
};

function GameDetailsReleased({ released }: GameDetailsReleasedProps) {
  if (!released) return <EmptyDetails>No Release Date</EmptyDetails>;
  return <DetailsContentText>{released}</DetailsContentText>;
}

export default GameDetailsReleased;
