import { EsrbRatingType } from "../../../../../utils/types/types";
import DetailsContentText from "../../overview/detailsConentText/DetailsContentText";
import EmptyDetails from "../../overview/emptyDetails/EmptyDetails";

type GameDetailsAgeRatingProps = {
  rating: EsrbRatingType;
};

function GameDetailsAgeRating({ rating }: GameDetailsAgeRatingProps) {
  if (!rating) return <EmptyDetails>No Rating</EmptyDetails>;

  return <DetailsContentText>{rating.name}</DetailsContentText>;
}

export default GameDetailsAgeRating;
