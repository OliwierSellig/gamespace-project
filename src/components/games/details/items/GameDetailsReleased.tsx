import DetailsContentText from "../overview/DetailsContentText";
import EmptyDetails from "../overview/EmptyDetails";

type GameDetailsReleasedProps = {
  released: string;
};

function GameDetailsReleased({ released }: GameDetailsReleasedProps) {
  if (!released) return <EmptyDetails>No Release Date</EmptyDetails>;
  return <DetailsContentText>{released}</DetailsContentText>;
}

export default GameDetailsReleased;
