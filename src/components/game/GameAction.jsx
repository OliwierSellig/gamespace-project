import { NavLink, useNavigate } from "react-router-dom";
import { useGame } from "../../contexts/GameContext";
import { useUser } from "../../contexts/UserContext";
import styles from "./gameAction.module.scss";

function GameAction() {
  const { game, topYear, topGenre } = useGame();
  const gameYear = new Date(game.released)?.getFullYear();
  const { checkGamePlayed, checkInWishlist, dispatch, gamesPlayed } = useUser();
  const navigate = useNavigate();

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
            else navigate(`add`);
          }}
        >
          {checkGamePlayed(game.id)
            ? "Remove from played "
            : "Add to My Games "}
          <img
            className={styles.addIcon}
            src={
              checkGamePlayed(game.id)
                ? "/svg/remove-games.svg"
                : "/svg/add-games.svg"
            }
            alt="Add to my games"
          />
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
          {checkInWishlist(game.id)
            ? `Remove from Wishlsit `
            : `Add to Wishlist `}
          <img
            className={styles.addIcon}
            src={
              checkInWishlist(game.id)
                ? "/svg/remove-wishlist.svg"
                : "/svg/add-wishlist.svg"
            }
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
      <button className={styles.btn__review}>
        Write a review&nbsp;
        <img
          className={styles.reviewIcon}
          src="/svg/pen.svg"
          alt="Write a review"
        />
      </button>
      <div className={styles.buy}>
        <header className={styles.buy__header}>Where to buy:</header>
        <ul className={styles.buy__list}>
          {game.stores.length > 0 &&
            game.stores.map((stores) => (
              <li key={crypto.randomUUID()}>
                <NavLink className={styles.buy__link} to="/platforms">
                  {stores.store.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default GameAction;
