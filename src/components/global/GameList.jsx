import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styles from "./gameList.module.scss";

function GameList({ gameList = [], listStyle = "", children }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${listStyle ? styles[listStyle] : ""}`}>
        {listStyle === "list__search" &&
          gameList.map((item) => (
            <Card
              rsc={item.background_image}
              title={item.name}
              details={item.released}
              key={crypto.randomUUID()}
              scale={true}
              handleClick={() => navigate(`/games/${item.id}`)}
            />
          ))}

        {listStyle === "list__developers" &&
          gameList.map((item) => (
            <Card
              rsc={item.image_background}
              title={item.name}
              details={`Games: ${item.games_count}`}
              key={crypto.randomUUID()}
              scale={true}
              handleClick={() => navigate(`/search?developers=${item.slug}`)}
            />
          ))}

        {listStyle === "list__genres" &&
          gameList.map((item) => (
            <Card
              rsc={item.image_background}
              title={item.name}
              details={`Games: ${item.games_count}`}
              key={crypto.randomUUID()}
              scale={true}
              handleClick={() => navigate(`/search?genres=${item.slug}`)}
            />
          ))}
        {listStyle === "list__library" &&
          gameList.map((item) => (
            <Card
              rsc={item.background_image}
              title={item.name}
              details={`${item.released} ${item.genres?.at(0).name}`}
              key={crypto.randomUUID()}
              scale={true}
              handleClick={() => navigate(`/games/${item.id}`)}
            />
          ))}
        {listStyle === "list__wishlist" &&
          gameList.map((item) => (
            <Card
              rsc={item.background_image}
              title={item.name}
              details={`${item.released} ${item.genres?.at(0).name}`}
              key={crypto.randomUUID()}
              scale={true}
              handleClick={() => navigate(`/games/${item.id}`)}
            />
          ))}
      </ul>
      {gameList.length > 0 && children}
    </div>
  );
}

export default GameList;
