// import { useGame } from "../../contexts/GameContext";
// import { useUser } from "../../contexts/UserContext";
// import CollectionsPopup from "./CollectionsPopup";
import { SingleGameItem } from "../../utils/types";
import Link from "next/link";
import styles from "./gameAction.module.scss";

type GameActionProps = {
  game: SingleGameItem;
  topYear: string;
  topGenre: string;
};

function GameAction({ game, topGenre, topYear }: GameActionProps) {
  // const { game, topYear, topGenre } = useGame();
  // const { checkGamePlayed, checkInWishlist, dispatch, checkReviewed } =
  //   useUser();
  const gameYear = new Date(game.released)?.getFullYear();
  console.log(topGenre);
  console.log(topYear);

  return (
    <div className={styles.container}>
      <img
        className={styles.cover}
        src={`${game?.background_image}`}
        alt={`${game?.name} Cover`}
      />
      <span className={styles.smallDetails}>
        {game.released || "Realed date not defined"} - Average Playtime:{" "}
        {game.playtime ? `${game.playtime} hours` : "Not defined"}
      </span>
      <h3 className={styles.title}>{game?.name}</h3>
      <div className={styles.actionBtns}>
        <button className={styles.btn__add}>
          <span>Add to My Games</span>
          <img
            className={styles.addIcon}
            src="/svg/add-games.svg"
            alt="Add to wishlist"
          />
        </button>
        <button className={styles.btn__wishlist}>
          <span>Add to Wishlist</span>
          <img
            className={styles.addIcon}
            src="/svg/add-wishlist.svg"
            alt="Add to wishlist"
          />
        </button>
        <button className={styles.btn__collections}>
          Save to Collection&nbsp;
          <img
            className={styles.addIcon}
            src="/svg/add-collection.svg"
            alt="Add to collection"
          />
          {/* <CollectionsPopup
            openCollections={openCollections}
            setOpenCollections={setOpenCollections}
          /> */}
        </button>
      </div>
      <div className={styles.rating}>
        <div className={styles.rating__chart}>
          <span className={styles.rating__chart__upper}>
            {game.ratings && game.ratings.length > 0
              ? `${game?.ratings.at(0).title.at(0).toUpperCase()}${game.ratings
                  .at(0)
                  .title.slice(1)}`
              : `Undefined`}
          </span>
          <span className={styles.rating__chart__lower}>
            {game.reviews_count || `Undefined`} Ratings
          </span>
        </div>
        <div className={styles.rating__chart}>
          <span className={styles.rating__chart__upper}>
            #{topGenre || "0"}
          </span>
          <span className={styles.rating__chart__lower}>
            {game.genres?.at(0)?.name || "Genre"}
          </span>
        </div>
        <div className={styles.rating__chart}>
          <span className={styles.rating__chart__upper}>#{topYear || "0"}</span>
          <span className={styles.rating__chart__lower}>
            Top {gameYear || "Year"}
          </span>
        </div>
      </div>
      <Link className={styles.btn__review} href={`reviews`}>
        <span>Write a review</span>
        <img
          className={styles.reviewIcon}
          src="/svg/pen.svg"
          alt="Write a review"
        />
      </Link>
      <div className={styles.buy}>
        <header className={styles.buy__header}>Where to buy:</header>
        <ul className={styles.buy__list}>
          {game.stores &&
            game.stores.map((stores) => (
              <li key={crypto.randomUUID()}>
                <Link className={styles.buy__link} href="/platforms">
                  {stores.store.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default GameAction;
