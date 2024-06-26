import { HiMiniXMark } from "react-icons/hi2";
import { useUserModalStates } from "../../../../../../contexts/userModalStatesContext/UserModalStatesContext";
import { useUserSettings } from "../../../../../../contexts/userSettingsContext/UserSettingsContext";
import Button from "../../../../../global/button/Button";
import styles from "./unsavedChanges.module.scss";

function UnsavedChanges() {
  const { setSettingsView } = useUserModalStates();
  const { closeUnsavedPopup, unsavedPopup } = useUserSettings();
  if (!unsavedPopup) return null;
  return (
    <div className={styles.container}>
      <button
        aria-label="Close Popup"
        onClick={closeUnsavedPopup}
        className={styles.close}
      >
        <HiMiniXMark />
      </button>
      <p className={styles.heading}>Discard Changes?</p>
      <p className={styles.text}>
        Are you sure, you want to discard all the changes you made?
      </p>
      <div className={styles.row}>
        <Button
          style={{ name: "opacity", shade: "white" }}
          borderRadius="sm"
          handleClick={closeUnsavedPopup}
        >
          Cancel
        </Button>
        <Button
          style={{ name: "opacity", shade: "red" }}
          borderRadius="sm"
          handleClick={() => {
            setSettingsView(false);
          }}
        >
          Discard
        </Button>
      </div>
    </div>
  );
}

export default UnsavedChanges;
