import { useEffect, useRef, useState } from "react";
import { useGame } from "../../contexts/GameContext";
import styles from "./gameAdd.module.scss";
import { useNavigate } from "react-router-dom";
import { useUtility } from "../../contexts/UtilityContext";
import { useUser } from "../../contexts/UserContext";

function GameAdd() {
  const { game } = useGame();
  const { addToPlayed, dispatch } = useUser();
  const { API_KEY } = useUtility();
  const navigate = useNavigate();
  const backgroundRef = useRef(null);
  const [isFav, setIsFav] = useState(false);
  const [parentsList, setParentsList] = useState();
  const [selectedPlatform, setSelectedPlatform] = useState({});

  useEffect(() => {
    async function fetchParents() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
        );
        const data = await res.json();

        setParentsList(data.results);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchParents();
  }, [API_KEY]);

  function setParent(id) {
    return parentsList?.find((parent) =>
      parent.platforms?.find((platform) => platform.id === id)
    );
  }

  function AddPlayedGame() {
    if (!selectedPlatform.id) return;
    const selectedGame = {
      game: game,
      platform: selectedPlatform,
      isFavourite: isFav,
    };
    addToPlayed(selectedGame);
    dispatch({ type: "removedFromWishlist", payload: game });
    navigate(-1);
  }

  return (
    <div
      ref={backgroundRef}
      className={styles.background}
      onClick={(e) => {
        if (e.target === backgroundRef.current) navigate(-1);
      }}
    >
      <div className={styles.container}>
        <h4
          className={styles.heading}
        >{`So, where have you played ${game.name}?`}</h4>
        <ul className={styles.list}>
          {game.platforms
            .map((platform) => setParent(platform.platform.id))
            .reduce(
              (unique, platform) =>
                unique.includes(platform) ? unique : [...unique, platform],
              []
            )
            .map((platform) => (
              <li
                tabIndex={0}
                className={`${styles.item} ${
                  selectedPlatform?.id === platform?.id ? styles.selected : ""
                }`}
                key={crypto.randomUUID()}
                onClick={() => setSelectedPlatform(platform)}
              >
                {platform?.name}
              </li>
            ))}
        </ul>
        <button className={styles.fav} onClick={() => setIsFav((fav) => !fav)}>
          <span className={styles.fav__text}>
            {isFav ? `Remove from favourites` : `Add as a favourite`}
          </span>
          <img
            className={styles.fav__icon}
            src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-unfilled.svg"}
            alt="Green heart"
          />
        </button>
        <button className={styles.played} onClick={AddPlayedGame}>
          Marked as played
        </button>
      </div>
    </div>
  );
}

export default GameAdd;
