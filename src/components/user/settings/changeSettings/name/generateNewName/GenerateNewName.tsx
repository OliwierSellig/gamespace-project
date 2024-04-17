import GenerateRandomUserName from "../../../../../global/randomUserName/generateRandomUserName/GenerateRandomUserName";
import styles from "./generateNewName.module.scss";

type GenerateNewNameProps = {
  setName: (name: string) => void;
};

function GenerateNewName({ setName }: GenerateNewNameProps) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Name ideas matching your profile</p>
      <GenerateRandomUserName handleClick={setName} />
    </div>
  );
}

export default GenerateNewName;
