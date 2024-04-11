import { Field } from "formik";
import FormInput from "../../../global/formInput/FormInput";
import styles from "./nameInput.module.scss";

function NameInput() {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="">
        Now, create your GameSpace name!
      </label>
      <Field
        name="gamespaceName"
        component={FormInput}
        placeholder="GameSpace Name"
      />
    </div>
  );
}

export default NameInput;
