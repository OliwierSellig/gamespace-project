import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUtility } from "../../contexts/UtilityContext";
import GameBox from "../global/GameBox";
import styles from "./selectRated.module.scss";

function SelectRated() {
  const { API_KEY } = useUtility();
  const { id } = useParams();
  const navigate = useNavigate();
  const backgroundRef = useRef();
  const [ratedGame, setRatedGame] = useState({});

  // ------------------------------------
  // Fetching The Selected Game Details
  // ------------------------------------

  useEffect(() => {
    async function fetchRated() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );
        const data = await res.json();
        setRatedGame(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchRated();
  }, [id, API_KEY]);

  return (
    <div
      ref={backgroundRef}
      className={styles.rated}
      onClick={(e) => {
        if (e.target === backgroundRef.current) navigate(-1);
      }}
    >
      {!ratedGame.id && (
        <span className={styles.loading}>Loading the view...</span>
      )}

      {ratedGame.id && (
        <div className={styles.container}>
          <GameBox
            rsc={ratedGame.background_image}
            title={ratedGame.name}
            released={ratedGame.released}
            played={ratedGame.added}
            rating={ratedGame.rating}
            ratedAmount={ratedGame.ratings_amount}
            meta={ratedGame.metacritic || "00"}
            handleClick={() => navigate(`/games/${ratedGame.id}`)}
          />
        </div>
      )}
    </div>
  );
}

export default SelectRated;
