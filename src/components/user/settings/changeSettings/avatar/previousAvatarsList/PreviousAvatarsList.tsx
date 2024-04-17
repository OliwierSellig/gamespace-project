import EmptyImageBox from "../../layout/emptyImageBox/EmptyImageBox";
import PreviousImageBox from "../../layout/previousImageBox/PreviousImageBox";
import styles from "./previousAvatarsList.module.scss";

function PreviousAvatarsList() {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 3 }, (_, i) => (
        <PreviousImageBox key={i} image="" />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <EmptyImageBox
          key={i}
          id={`New avatar ${i}`}
          handleChange={(e) => console.log(e)}
        />
      ))}
    </ul>
  );
}

export default PreviousAvatarsList;
