import { Field, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { userLogin } from "../../../../firebase/auth";
import Button from "../../../global/button/Button";
import FormInput from "../../../global/formInput/FormInput";
import ForgotPasswordButton from "../forgotPasswordButton/ForgotPasswordButton";
import LoginInputs from "../loginInputs/LoginInputs";
import styles from "./loginForm.module.scss";
import { validationSchema } from "./validationSchema";

function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const error = await userLogin({
        email: values.email,
        password: values.password,
      });
      formik.resetForm();
      if (error) {
        toast.error("Invalid user credentials");
      } else {
        toast.success("Logged in successfully");
      }
      setIsLoading(false);
    },
  });
  const buttonDisabled = Boolean(
    !formik.values.email ||
      formik.errors.email ||
      !formik.values.password ||
      formik.errors.password,
  );
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <LoginInputs>
          <Field name="email" component={FormInput} placeholder="Email" />
          <Field name="password" component={FormInput} placeholder="Password" />
        </LoginInputs>
        <ForgotPasswordButton />
        <Button
          isLoading={isLoading}
          type="submit"
          style={{ name: "opacity", shade: "white" }}
          disabled={buttonDisabled}
          borderRadius="md"
        >
          Login
        </Button>
      </form>
    </FormikProvider>
  );
}

export default LoginForm;
