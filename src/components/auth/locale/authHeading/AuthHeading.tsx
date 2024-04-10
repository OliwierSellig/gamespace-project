import styles from "./authHeading.module.scss";

type AuthHeadingProps = {
  main: string;
  sub: string;
};

function AuthHeading({ main, sub }: AuthHeadingProps) {
  return (
    <h1 className={styles.heading}>
      <span className={styles.heading__main}>{main}</span>
      <span className={styles.heading__sub}>{sub}</span>
    </h1>
  );
}

export default AuthHeading;
