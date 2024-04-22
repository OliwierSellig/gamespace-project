"use client";

import { FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { useFirebaseUser } from "../../../../contexts/FirebaseUserContext";
import { CreateUser, validateEmail } from "../../../../firebase/auth";
import SwiperComponent from "../../../global/swiperComponent/SwiperComponent";
import AvatarInputs from "../avatarInputs/AvatarInputs";
import NameInput from "../nameInput/NameInput";
import SignupFormButton from "../signupFormButton/SignupFormButton";
import SignupPagination from "../signupPagination/SignupPagination";
import SignupSwiperContainer from "../signupSwiperContainer/SignupSwiperContainer";
import UserInputs from "../userInputs/UserInputs";
import styles from "./signupContainer.module.scss";
import { validationSchema } from "./validationSchema";

function SignupContainer() {
  const { setRegisterUserData } = useFirebaseUser();
  const [loadingEmail, setLoadingEmail] = useState<boolean>(false);
  type initialValues = {
    email: string;
    password: string;
    passwordConfirm: string;
    gamespaceName: string;
  };

  const formik = useFormik<initialValues>({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      gamespaceName: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const user = await CreateUser({
        email: values.email,
        password: values.password,
        gamespaceName: values.gamespaceName,
        avatar: avatar,
        background: background,
      });
      setRegisterUserData(user);
    },
  });

  const [avatar, setAvatar] = useState<File | null>(null);
  const [background, setBackground] = useState<File | null>(null);

  const [currentTab, setCurrentTab] = useState<number>(0);

  const swiperItems = [UserInputs, AvatarInputs, NameInput];

  const isLastPage = currentTab === swiperItems.length - 1;

  function handleKeyPress(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key === "Enter" && !isLastPage) {
      e.preventDefault();
    }
  }

  function setEmailLoading(isLoading: boolean) {
    setLoadingEmail(isLoading);
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
    const enableUserStage = Boolean(
      formik.values.email &&
        formik.values.password &&
        formik.values.passwordConfirm &&
        !formik.errors.email &&
        !formik.errors.password &&
        !formik.errors.passwordConfirm,
    );

    switch (stage) {
      case 0:
        return enableUserStage;
      case 1:
        return enableUserStage;
      case 2:
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
                loadingEmail={loadingEmail}
                validateEmail={async (
                  value: string,
                  changeLoadingState: boolean,
                ) =>
                  await validateEmail(
                    value,
                    changeLoadingState ? setEmailLoading : () => {},
                  )
                }
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
          isLoading={formik.isSubmitting}
          setNextPage={() => setCurrentTab((prev) => prev + 1)}
          isLastPage={isLastPage}
          buttonDisabled={!getIsButtonEnabled(currentTab) || loadingEmail}
        />
      </form>
    </FormikProvider>
  );
}

export default SignupContainer;
