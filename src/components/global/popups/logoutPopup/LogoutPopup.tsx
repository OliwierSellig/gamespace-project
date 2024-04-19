"use client";

import toast from "react-hot-toast";
import { useUser } from "../../../../contexts/UserContext";
import { userLogout } from "../../../../firebase/auth";
import ConfirmationPopup from "../confirmationPupup/ConfirmationPopup";
import styles from "./logoutPopup.module.scss";

function LogoutPopup() {
  const { state, setLoggingOut } = useUser();

  if (!state.isLogginOut) return null;

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
