"use client";

import { Field, FormikProvider, useFormik } from "formik";
import { sentResetPasswordEmail } from "../../../../firebase/auth";
import Button from "../../../global/button/Button";
import FormInput from "../../../global/formInput/FormInput";
import styles from "./passwordRecoveryForm.module.scss";
import { validationSchema } from "./validationSchema";

function PasswordRecoveryForm() {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await sentResetPasswordEmail(values.email);
      formik.resetForm();
    },
  });
  return (
    <FormikProvider value={formik}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className={styles.label}>
          Plase, write down your email, so we can send you a reset message.
        </label>
        <Field
          id="email"
          name="email"
          component={FormInput}
          placeholder="Email"
        />
        <Button
          isLoading={formik.isSubmitting}
          type="submit"
          style={{ name: "opacity", shade: "white" }}
          borderRadius="md"
        >
          Submit
        </Button>
      </form>
    </FormikProvider>
  );
}

export default PasswordRecoveryForm;
