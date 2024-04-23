import { useState } from "react";
import { useFirebaseUser } from "../../../../../../contexts/FirebaseUserContext";
import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import { updateUserInfo } from "../../../../../../firebase/userData";
import Button from "../../../../../global/button/Button";
import styles from "./actionsButtons.module.scss";

function ActionButtons() {
  const { state, setUserProfile } = useFirebaseUser();
  const { saveChanges, leaveUserSettings, background, avatar, newName } =
    useUserSettings();
  const [isSavingChanges, setIsSavingChanges] = useState<boolean>(false);

  async function handleSave() {
    setIsSavingChanges(true);
    const updatedDoc = await updateUserInfo(state.id, {
      avatar,
      background,
      name: newName,
    });
    setUserProfile({
      name: updatedDoc.gamespaceName,
      recentAvatars: updatedDoc.recentAvatars,
      recentBackgrounds: updatedDoc.recentBackgrounds,
    });
    saveChanges();
    setIsSavingChanges(false);
  }

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
        handleClick={handleSave}
        disabled={isSavingChanges}
        isLoading={isSavingChanges}
      >
        Save Changes
      </Button>
    </nav>
  );
}

export default ActionButtons;
