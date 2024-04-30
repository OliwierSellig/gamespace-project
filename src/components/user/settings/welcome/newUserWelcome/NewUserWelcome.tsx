"use client";

import { useEffect, useState } from "react";
import { useUser } from "../../../../../contexts/UserContext";
import WelcomePopup from "../welcomePopup/WelcomePopup";

function NewUserWelcome() {
  const { state, currentAvatar, currentBackground } = useUser();
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
      background={currentBackground}
      avatar={currentAvatar}
      name={state.profileSettings.name}
      handleClose={() => setShowWelcomePopup(false)}
    />
  );
}

export default NewUserWelcome;
