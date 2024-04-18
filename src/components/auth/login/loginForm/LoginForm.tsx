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
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <LoginInputs>
          <Field name="email" component={FormInput} placeholder="Email" />
          <Field name="password" component={FormInput} placeholder="Password" />
        </LoginInputs>
        <ForgotPasswordButton />
        <Button style={{ name: "opacity", shade: "white" }} borderRadius="md">
          Login
        </Button>
      </form>
    </FormikProvider>
  );
}

export default LoginForm;
