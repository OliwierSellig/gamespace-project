import Button from "../../../../../global/button/Button";
import styles from "./actionsButtons.module.scss";

function ActionButtons() {
  return (
    <nav className={styles.container}>
      <button className={styles.btn}>Cancel</button>
      <Button
        borderRadius="sm"
        fontSize="sm"
        sizeX="lg"
        style={{ name: "opacity", shade: "white" }}
      >
        Save Changes
      </Button>
    </nav>
  );
}

export default ActionButtons;
