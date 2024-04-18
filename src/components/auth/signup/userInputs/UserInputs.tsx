import { Field } from "formik";
import FormInput from "../../../global/formInput/FormInput";
import PasswordInput from "../../../global/passwordInput/PasswordInput";
import styles from "./userInputs.module.scss";

function UserInputs() {
  return (
    <div className={styles.container}>
      <Field name="email" component={FormInput} placeholder="Email" />{" "}
      <Field name="password" component={PasswordInput} placeholder="Password" />
      <Field
        name="passwordConfirm"
        component={PasswordInput}
        placeholder="Confirm Password"
      />
    </div>
  );
}

export default UserInputs;
