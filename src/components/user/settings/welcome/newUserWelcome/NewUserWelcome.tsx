"use client";

import { useEffect, useState } from "react";
import { useFirebaseUser } from "../../../../../contexts/FirebaseUserContext";
import WelcomePopup from "../welcomePopup/WelcomePopup";

function NewUserWelcome() {
  const { state } = useFirebaseUser();
  const [showWelcomePopup, setShowWelcomePopup] = useState<boolean>(false);

  useEffect(() => {
    const isNewUser = localStorage.getItem("isNewUser");
    if (isNewUser) {
      setShowWelcomePopup(true);
      localStorage.removeItem("isNewUser");
    }
  }, []);

  if (!showWelcomePopup) return null;

  return (
    <WelcomePopup
      background={state.profileSettings.background}
      avatar={state.profileSettings.avatar}
      name={state.profileSettings.name}
      handleClose={() => setShowWelcomePopup(false)}
    />
  );
}

export default NewUserWelcome;
