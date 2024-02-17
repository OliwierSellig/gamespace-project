import { EsrbRatingType } from "../../../../utils/types";
import DetailsContentText from "../overview/DetailsContentText";
import EmptyDetails from "../overview/EmptyDetails";

type GameDetailsAgeRatingProps = {
  rating: EsrbRatingType;
};

function GameDetailsAgeRating({ rating }: GameDetailsAgeRatingProps) {
  if (!rating) return <EmptyDetails>No Rating</EmptyDetails>;

  return <DetailsContentText>{rating.name}</DetailsContentText>;
}

export default GameDetailsAgeRating;
