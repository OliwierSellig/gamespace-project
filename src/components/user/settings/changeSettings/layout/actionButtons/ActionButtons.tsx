import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import Button from "../../../../../global/button/Button";
import styles from "./actionsButtons.module.scss";

function ActionButtons() {
  const { saveChanges, leaveUserSettings } = useUserSettings();
  return (
    <nav className={styles.container}>
      <button onClick={leaveUserSettings} className={styles.btn}>
        Cancel
      </button>
      <Button
        borderRadius="sm"
        fontSize="sm"
        sizeX="lg"
        style={{ name: "opacity", shade: "white" }}
        handleClick={saveChanges}
      >
        Save Changes
      </Button>
    </nav>
  );
}

export default ActionButtons;
