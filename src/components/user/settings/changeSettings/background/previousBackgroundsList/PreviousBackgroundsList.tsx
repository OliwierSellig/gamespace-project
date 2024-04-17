import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousBackgroundsList.module.scss";

function PreviousBackgroundsList() {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 1 }, (_, i) => (
        <PreviousImageBox key={i} image="" type="background" />
      ))}
      {Array.from({ length: 2 }, (_, i) => (
        <EmptyImageBox
          handleChange={(e) => console.log(e)}
          key={i}
          id={`set-background-${i}`}
          type="background"
        />
      ))}
    </ul>
  );
}

export default PreviousBackgroundsList;
