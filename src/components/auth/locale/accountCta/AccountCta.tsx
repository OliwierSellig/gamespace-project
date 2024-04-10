import Link from "next/link";
import styles from "./accountCta.module.scss";

type AccountCtaProps = {
  type?: "login" | "register";
};

function AccountCta({ type = "register" }: AccountCtaProps) {
  const data =
    type === "login"
      ? { sub: "Already have an account?", main: "Login", dest: "login" }
      : {
          sub: "Don't have an account yet?",
          main: "Create account",
          dest: "signup",
        };
  return (
    <div className={styles.container}>
      <span className={styles.text}>{data.sub} </span>
      <Link className={styles.link} href={data.dest}>
        {data.main}
      </Link>
    </div>
  );
}

export default AccountCta;
