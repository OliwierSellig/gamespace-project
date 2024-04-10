import Link from "next/link";
import styles from "./forgotPasswordButton.module.scss";

function ForgotPasswordButton() {
  return (
    <Link href="/password-recovery" className={styles.link}>
      Forgot Password?
    </Link>
  );
}

export default ForgotPasswordButton;
