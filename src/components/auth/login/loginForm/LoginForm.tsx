import { Field, useFormik } from "formik";
import Button from "../../../global/button/Button";
import ForgotPasswordButton from "../forgotPasswordButton/ForgotPasswordButton";
import LoginInputs from "../loginInputs/LoginInputs";
import styles from "./loginForm.module.scss";

function LoginForm() {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: () => {},
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <LoginInputs>
        <Field />
        <Field />
      </LoginInputs>
      <ForgotPasswordButton />
      <Button>Login</Button>
    </form>
  );
}

export default LoginForm;
