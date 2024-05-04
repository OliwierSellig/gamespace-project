"use client";

import toast from "react-hot-toast";
import { useUserModalStates } from "../../../../contexts/userModalStatesContext/UserModalStatesContext";
import { userLogout } from "../../../../firebase/auth";
import ConfirmationPopup from "../confirmationPupup/ConfirmationPopup";
import styles from "./logoutPopup.module.scss";

function LogoutPopup() {
  const { setLoggingOut, isLoggingOut } = useUserModalStates();

  if (!isLoggingOut) return null;

  return (
    <div className={styles.background}>
      <ConfirmationPopup
        actionButtonText="Logout"
        onCloseModal={() => {
          setLoggingOut(false);
        }}
        handleClick={async () => {
          await userLogout();
          toast.success("Logged out successfully");
        }}
      >
        Are you sure, you want to log out? If so, you will be moved back to
        homepage.
      </ConfirmationPopup>
    </div>
  );
}

export default LogoutPopup;
