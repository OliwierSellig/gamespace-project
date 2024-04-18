"use client";

import { FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import SwiperComponent from "../../../global/swiperComponent/SwiperComponent";
import AvatarInputs from "../avatarInputs/AvatarInputs";
import NameInput from "../nameInput/NameInput";
import PasswordInputs from "../passwordInputs/PasswordInputs";
import SignupFormButton from "../signupFormButton/SignupFormButton";
import SignupPagination from "../signupPagination/SignupPagination";
import SignupSwiperContainer from "../signupSwiperContainer/SignupSwiperContainer";
import UserInputs from "../userInputs/UserInputs";
import styles from "./signupContainer.module.scss";
import { validationSchema } from "./validationSchema";

function SignupContainer() {
  type initialValues = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
    gamespaceName: string;
  };

  const formik = useFormik<initialValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      gamespaceName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ avatar, background, ...values });
    },
  });

  const [avatar, setAvatar] = useState<File | null>(null);
  const [background, setBackground] = useState<File | null>(null);

  const [currentTab, setCurrentTab] = useState<number>(0);

  const swiperItems = [UserInputs, PasswordInputs, AvatarInputs, NameInput];

  const isLastPage = currentTab === swiperItems.length - 1;

  function handleKeyPress(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key === "Enter" && !isLastPage) {
      e.preventDefault();
    }
  }

  function setImage(type: "avatar" | "background", file: File) {
    switch (type) {
      case "avatar": {
        setAvatar(file);
        return;
      }
      case "background": {
        setBackground(file);
        return;
      }
      default:
        return;
    }
  }

  function getIsButtonEnabled(stage: number) {
    const enableFirstStage = Boolean(
      formik.values.username &&
        formik.values.email &&
        !formik.errors.username &&
        !formik.errors.email,
    );

    const enableSecondStage = Boolean(
      formik.values.password &&
        formik.values.passwordConfirm &&
        !formik.errors.password &&
        !formik.errors.passwordConfirm,
    );

    switch (stage) {
      case 0:
        return enableFirstStage;
      // return true;
      case 1:
        return enableSecondStage;
      // return true;
      case 2:
        return enableFirstStage && enableSecondStage;
      // return true;
      case 3:
        return formik.isValid;
      default:
        return false;
    }
  }

  return (
    <FormikProvider value={formik}>
      <form
        onKeyDown={handleKeyPress}
        onSubmit={formik.handleSubmit}
        className={styles.form}
      >
        <SwiperComponent
          allowSwipeNext={getIsButtonEnabled(currentTab)}
          setExtSlide={(num) => setCurrentTab(num)}
          externalSlide={currentTab}
          props={{ default: { slidesPerView: 1, spaceBetween: 32 } }}
        >
          {swiperItems.map((Item, i) => (
            <SignupSwiperContainer key={i}>
              <Item
                avatar={avatar}
                background={background}
                skipStep={() => setCurrentTab((prev) => prev + 1)}
                setImage={setImage}
              />
            </SignupSwiperContainer>
          ))}
        </SwiperComponent>
        <SignupPagination
          length={swiperItems.length}
          activeTab={currentTab}
          handleClick={(num) => setCurrentTab(num)}
          getIsButtonEnabled={getIsButtonEnabled}
        />
        <SignupFormButton
          setNextPage={() => setCurrentTab((prev) => prev + 1)}
          isLastPage={isLastPage}
          buttonDisabled={!getIsButtonEnabled(currentTab)}
        />
      </form>
    </FormikProvider>
  );
}

export default SignupContainer;
