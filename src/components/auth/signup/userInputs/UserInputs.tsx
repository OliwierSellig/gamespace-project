import { Field, FormikValues, useFormikContext } from "formik";
import FormInput from "../../../global/formInput/FormInput";
import PasswordInput from "../../../global/passwordInput/PasswordInput";
import styles from "./userInputs.module.scss";

type UserInputsProps = {
  loadingEmail: boolean;
  validateEmail: (
    value: string,
    changeLoadingState: boolean,
  ) => Promise<string>;
};

function UserInputs({ loadingEmail, validateEmail }: UserInputsProps) {
  const { values } = useFormikContext<FormikValues>();

  return (
    <div
      className={`${styles.container} ${loadingEmail ? styles.loading : ""}`}
    >
      <Field
        name="email"
        component={FormInput}
        placeholder="Email"
        validate={async (value: string) =>
          await validateEmail(value, value !== values.email)
        }
      />
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
