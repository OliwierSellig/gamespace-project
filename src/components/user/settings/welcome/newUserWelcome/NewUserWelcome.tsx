"use client";

import { useEffect, useState } from "react";
import { useFirebaseUser } from "../../../../../contexts/FirebaseUserContext";
import WelcomePopup from "../welcomePopup/WelcomePopup";

function NewUserWelcome() {
  const { state } = useFirebaseUser();
  const [showWelcomePopup, setShowWelcomePopup] = useState<boolean>(false);
  const avatar = state.profileSettings.recentAvatars.at(0);
  const background = state.profileSettings.recentBackgrounds.at(0);

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
      background={background}
      avatar={avatar}
      name={state.profileSettings.name}
      handleClose={() => setShowWelcomePopup(false)}
    />
  );
}

export default NewUserWelcome;
