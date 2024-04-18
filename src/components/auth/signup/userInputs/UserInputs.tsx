import { Field } from "formik";
import FormInput from "../../../global/formInput/FormInput";
import styles from "./userInputs.module.scss";

function UserInputs() {
  return (
    <div className={styles.container}>
      <Field name="username" component={FormInput} placeholder="Username" />
      <Field name="email" component={FormInput} placeholder="Email" />
    </div>
  );
}

export default UserInputs;
