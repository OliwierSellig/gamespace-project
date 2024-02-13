import { FetchedGameItem } from "../../utils/types";
import GameCard from "../global/GameCard";
import Pagination from "../global/Pagination";
import styles from "./searchList.module.scss";

type SearchListProps = {
  list: FetchedGameItem[];
  count: number;
  currentPage: number;
};

function SearchList({ list, count, currentPage }: SearchListProps) {
  return (
    <>
      <nav className={styles.container}>
        {list &&
          list.map((game) => (
            <GameCard
              image={game.background_image}
              key={game.id}
              alt={`${game.name} cover`}
              href={`/games/${game.id}`}
              imageSizes={{
                defalult: { number: 25, unit: "vw" },
                sizes: [
                  { maxWidth: 1600, size: { unit: "vw", number: 33 } },
                  { maxWidth: 1100, size: { unit: "vw", number: 50 } },
                  { maxWidth: 650, size: { unit: "vw", number: 95 } },
                ],
              }}
            >
              <GameCard.Title>{game.name}</GameCard.Title>
              <GameCard.Details>{`${game.genres?.at(0)?.name || ""} ${
                game.released || ""
              }`}</GameCard.Details>
            </GameCard>
          ))}
      </nav>
      <nav className={styles.pagination}>
        <Pagination currentPage={currentPage} maxPage={Math.ceil(count / 20)} />
      </nav>
    </>
  );
}

export default SearchList;
