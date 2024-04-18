import { useUserSettings } from "../../../../../../contexts/UserSettingsContext";
import GenerateRandomUserName from "../../../../../global/randomUserName/generateRandomUserName/GenerateRandomUserName";
import styles from "./generateNewName.module.scss";

function GenerateNewName() {
  const { setNewName } = useUserSettings();

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Name ideas matching your profile</p>
      <GenerateRandomUserName handleClick={setNewName} />
    </div>
  );
}

export default GenerateNewName;
