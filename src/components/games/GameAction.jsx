import { useGame } from "../../contexts/GameContext";
import { useUser } from "../../contexts/UserContext";
import styles from "./gameAction.module.scss";
import { useState } from "react";
import CollectionsPopup from "./CollectionsPopup";
import Link from "next/link";
import { useRouter } from "next/navigation";

function GameAction() {
  const { game, topYear, topGenre } = useGame();
  const gameYear = new Date(game.released)?.getFullYear();
  const { checkGamePlayed, checkInWishlist, dispatch, checkReviewed } =
    useUser();
  const [openCollections, setOpenCollections] = useState(false);
  const router = useRouter();

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
        <button
          className={styles.btn__add}
          onClick={() => {
            if (checkGamePlayed(game.id))
              dispatch({ type: "removedFromPlayed", payload: game });
            else router.push(`add`);
          }}
        >
          {checkGamePlayed(game.id) ? (
            <>
              <span>Remove from played</span>
              <img
                className={styles.addIcon}
                src="/svg/remove-games.svg"
                alt="Add to wishlist"
              />
            </>
          ) : (
            <>
              <span>Add to My Games</span>
              <img
                className={styles.addIcon}
                src="/svg/add-games.svg"
                alt="Add to wishlist"
              />
            </>
          )}
        </button>
        <button
          className={styles.btn__wishlist}
          onClick={() => {
            if (checkInWishlist(game.id))
              dispatch({ type: "removedFromWishlist", payload: game });
            else {
              if (checkGamePlayed(game.id)) {
                return;
              } else {
                dispatch({ type: "addedToWishlist", payload: game });
              }
            }
          }}
        >
          {checkInWishlist(game.id) ? (
            <>
              <span>Remove from Wishlist</span>
              <img
                className={styles.addIcon}
                src="/svg/remove-wishlist.svg"
                alt="Add to wishlist"
              />
            </>
          ) : (
            <>
              <span>Add to Wishlist</span>
              <img
                className={styles.addIcon}
                src="/svg/add-wishlist.svg"
                alt="Add to wishlist"
              />
            </>
          )}
        </button>
        <button
          className={styles.btn__collections}
          onClick={() => setOpenCollections(true)}
        >
          Save to Collection&nbsp;
          <img
            className={styles.addIcon}
            src="/svg/add-collection.svg"
            alt="Add to collection"
          />
          <CollectionsPopup
            openCollections={openCollections}
            setOpenCollections={setOpenCollections}
          />
        </button>
      </div>
      <div className={styles.rating}>
        <div className={styles.rating__chart}>
          <span className={styles.rating__chart__upper}>
            {game.ratings.length > 0
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
        {!checkReviewed(game.id) ? (
          <>
            <span>Write a review</span>
            <img
              className={styles.reviewIcon}
              src="/svg/pen.svg"
              alt="Write a review"
            />
          </>
        ) : (
          <>
            <span>Edit your review</span>
            <img
              className={styles.reviewIcon}
              src="/svg/pen-edit.svg"
              alt="Edit a review"
            />
          </>
        )}
      </Link>
      <div className={styles.buy}>
        <header className={styles.buy__header}>Where to buy:</header>
        <ul className={styles.buy__list}>
          {game.stores.length > 0 &&
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
