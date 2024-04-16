import PreviousAvatarBox from "../previousAvatarBox/PreviousAvatarBox";
import SetAvatarBox from "../setAvatarBox/SetAvatarBox";
import styles from "./previousAvatarsList.module.scss";

function PreviousAvatarsList() {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 3 }, (_, i) => (
        <PreviousAvatarBox key={i} image="" />
      ))}
      {Array.from({ length: 3 }, (_, i) => (
        <SetAvatarBox
          key={i}
          id={`New avatar ${i}`}
          handleChange={(e) => console.log(e)}
        />
      ))}
    </ul>
  );
}

export default PreviousAvatarsList;
