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
      avatar: "",
      background: "",
      gamespaceName: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const [currentTab, setCurrentTab] = useState<number>(0);

  const swiperItems = [UserInputs, PasswordInputs, AvatarInputs, NameInput];

  const isLastPage = currentTab === swiperItems.length - 1;

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
      case 1:
        return enableSecondStage;
      case 2:
        return enableFirstStage && enableSecondStage;
      case 3:
        return formik.isValid;
      default:
        return false;
    }
  }

  function handleSubmitButtonClick() {
    if (isLastPage) console.log(formik.initialValues);
    else {
      setCurrentTab((prev) => prev + 1);
    }
  }

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <SwiperComponent
          allowSwipeNext={getIsButtonEnabled(currentTab)}
          setExtSlide={(num) => setCurrentTab(num)}
          externalSlide={currentTab}
          props={{ default: { slidesPerView: 1, spaceBetween: 32 } }}
        >
          {swiperItems.map((Item, i) => (
            <SignupSwiperContainer key={i}>
              <Item skipStep={() => setCurrentTab((prev) => prev + 1)} />
            </SignupSwiperContainer>
          ))}
        </SwiperComponent>
        <SignupPagination
          length={swiperItems.length}
          activeTab={currentTab}
          handleClick={(num) => setCurrentTab(num)}
          getIsButtonEnabled={getIsButtonEnabled}
        />
        <Button
          type="button"
          style={{ name: "opacity", shade: "white" }}
          borderRadius="md"
          disabled={!getIsButtonEnabled(currentTab)}
          handleClick={handleSubmitButtonClick}
        >
          {isLastPage ? "Create Account" : "Continue"}
        </Button>
      </form>
    </FormikProvider>
  );
}

export default SignupContainer;
