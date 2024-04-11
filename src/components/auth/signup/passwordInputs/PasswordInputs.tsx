import { Field } from "formik";
import PasswordInput from "../../../global/passwordInput/PasswordInput";
import styles from "./passwordInputs.module.scss";

function PasswordInputs() {
  return (
    <div className={styles.container}>
      <Field name="password" component={PasswordInput} placeholder="Password" />
      <Field
        name="passwordConfirm"
        component={PasswordInput}
        placeholder="Confirm Password"
      />
    </div>
  );
}

export default PasswordInputs;
