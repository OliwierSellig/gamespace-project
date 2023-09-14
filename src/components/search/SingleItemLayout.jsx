import { useNavigate } from "react-router-dom";
import GameBox from "../global/GameBox";
import styles from "./singleItemLayout.module.scss";

function SingleItemLayout({ list = [], children }) {
  const navigate = useNavigate();

  return (
    <ul className={styles.container}>
      {list.map((item) => (
        <GameBox
          rsc={item.background_image}
          title={item.name}
          released={item.released}
          rating={item.rating}
          ratedAmount={item.ratings_count}
          played={item.added}
          meta={item.metacritic ? item.metacritic : "00"}
          key={crypto.randomUUID()}
          handleClick={() => navigate(`/games/${item.id}`)}
        />
      ))}
      {list.length > 0 && children}
    </ul>
  );
}

export default SingleItemLayout;
