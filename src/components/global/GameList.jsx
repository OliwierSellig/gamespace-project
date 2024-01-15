import Card from "./Card";
import styles from "./gameList.module.scss";

function GameList({ gameList = [], listStyle = "", children }) {
  console.log(gameList);
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
              handleClick={() => {}}
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
              handleClick={() => {}}
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
              handleClick={() => {}}
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
              handleClick={() => {}}
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
              handleClick={() => {}}
            />
          ))}
      </ul>
      {gameList.length > 0 && children}
    </div>
  );
}

export default GameList;
