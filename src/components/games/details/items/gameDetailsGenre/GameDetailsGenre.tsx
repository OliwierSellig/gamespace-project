import { GameGenreItem } from "../../../../../utils/types";
import DetailsContentText from "../../overview/detailsConentText/DetailsContentText";
import EmptyDetails from "../../overview/emptyDetails/EmptyDetails";

type GameDetailsGenreProps = { genres: GameGenreItem[] };

function GameDetailsGenre({ genres }: GameDetailsGenreProps) {
  if (!genres || !genres.length) return <EmptyDetails>No Genres</EmptyDetails>;
  return (
    <nav>
      {genres.map((item, i) =>
        i === 0 ? (
          <DetailsContentText
            type="link"
            href={`/search?genre=${item.id}`}
            key={item.id}
          >
            {item.name}
          </DetailsContentText>
        ) : (
          <>
            <DetailsContentText type="span">, </DetailsContentText>
            <DetailsContentText
              type="link"
              key={item.id}
              href={`/search?platform=${item.id}`}
            >
              {item.name}
            </DetailsContentText>
          </>
        )
      )}
    </nav>
  );
}

export default GameDetailsGenre;
