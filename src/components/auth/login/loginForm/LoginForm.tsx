"use client";

import { Field, FormikProvider, useFormik } from "formik";
import Button from "../../../global/button/Button";
import FormInput from "../../../global/formInput/FormInput";
import ForgotPasswordButton from "../forgotPasswordButton/ForgotPasswordButton";
import LoginInputs from "../loginInputs/LoginInputs";
import styles from "./loginForm.module.scss";
import { validationSchema } from "./validationSchema";

function LoginForm() {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <LoginInputs>
          <Field name="username" component={FormInput} placeholder="Username" />
          <Field name="password" component={FormInput} placeholder="Password" />
        </LoginInputs>
        <ForgotPasswordButton />
        <Button>Login</Button>
      </form>
    </FormikProvider>
  );
}

export default LoginForm;
