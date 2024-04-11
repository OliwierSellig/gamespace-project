"use client";

import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import Button from "../../../global/button/Button";
import SwiperComponent from "../../../global/swiperComponent/SwiperComponent";
import AvatarInputs from "../avatarInputs/AvatarInputs";
import NameInput from "../nameInput/NameInput";
import PasswordInputs from "../passwordInputs/PasswordInputs";
import SignupPagination from "../signupPagination/SignupPagination";
import SignupSwiperContainer from "../signupSwiperContainer/SignupSwiperContainer";
import UserInputs from "../userInputs/UserInputs";
import styles from "./signupContainer.module.scss";
import { validationSchema } from "./validationSchema";

function SignupContainer() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatar: null,
      background: null,
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const [currentTab, setCurrentTab] = useState<number>(0);

  const swiperItems = [UserInputs, PasswordInputs, AvatarInputs, NameInput];

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <SwiperComponent
          externalSlide={currentTab}
          props={{ default: { slidesPerView: 1, spaceBetween: 32 } }}
        >
          {swiperItems.map((Item, i) => (
            <SignupSwiperContainer key={i}>
              <Item />
            </SignupSwiperContainer>
          ))}
        </SwiperComponent>
        <SignupPagination
          length={swiperItems.length}
          activeTab={currentTab}
          handleClick={(num) => setCurrentTab(num)}
        />
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
