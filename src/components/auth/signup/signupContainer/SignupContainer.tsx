"use client";

import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import Button from "../../../global/button/Button";
import SwiperComponent from "../../../global/swiperComponent/SwiperComponent";
import PasswordInputs from "../passwordInputs/PasswordInputs";
import UserInputs from "../userInputs/UserInputs";
import styles from "./signupContainer.module.scss";
import { validationSchema } from "./validationSchema";

function SignupContainer() {
  const formik = useFormik({
    initialValues: { username: "", email: "" },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const [currentTab, setCurrentTab] = useState<number>(0);

  console.log(currentTab);

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <SwiperComponent
          props={{ default: { slidesPerView: 1, spaceBetween: 32 } }}
        >
          <UserInputs />
          <PasswordInputs />
        </SwiperComponent>

        <Button
          type="button"
          style={{ name: "opacity", shade: "white" }}
          borderRadius="md"
          disabled={currentTab >= 3}
          handleClick={() => setCurrentTab((prev) => prev + 1)}
        >
          Continue
        </Button>
      </form>
    </FormikProvider>
  );
}

export default SignupContainer;
