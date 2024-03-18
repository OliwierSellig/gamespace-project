import SwiperComponent from "../../../../global/SwiperComponent";
import CollectionsGamePreviewCard from "../collectionsGamePreviewCard/CollectionsGamePreviewCard";
import EmptyGameCard from "../emptyGameCard/EmptyGameCard";
import styles from "./collectionCardGames.module.scss";

type CollecionCardGames = {
  games: { cover: string; id: number; name: string }[];
};

function CollectionCardGames({ games }: CollecionCardGames) {
  const emptySlotsCount = Math.max(0, 3 - games.length);

  return (
    <div className={styles.container}>
      <div className={styles.separator}>
        <span className={styles.games}>Game count: {games.length}</span>
        <div className={styles.line} />
      </div>
      <SwiperComponent
        props={{
          default: { spaceBetween: 12, slidesPerView: 2 },
          breakpoints: [
            { minWidth: 480, slidesPerView: 3 },
            { minWidth: 980, slidesPerView: 2 },
            { minWidth: 1200, slidesPerView: 3 },
          ],
        }}
      >
        {games.map((game) => (
          <CollectionsGamePreviewCard
            id={game.id}
            cover={game.cover}
            key={game.id}
            name={game.name}
          />
        ))}
        {Array.from({ length: emptySlotsCount }, (_, i) => (
          <EmptyGameCard key={i} />
        ))}
      </SwiperComponent>
    </div>
  );
}

export default CollectionCardGames;
