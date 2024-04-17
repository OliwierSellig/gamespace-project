import { useFormikContext } from "formik";
import GenerateRandomUserName from "../../../global/randomUserName/generateRandomUserName/GenerateRandomUserName";
import styles from "./randomUserName.module.scss";

function RandomUserName() {
  const formik = useFormikContext();

  return (
    <div className={styles.container}>
      <p className={styles.text}>Or, choose one from below:</p>
      <GenerateRandomUserName
        handleClick={(name) => formik.setFieldValue("gamespaceName", name)}
      />
    </div>
  );
}

export default RandomUserName;
