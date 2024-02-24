import styles from "./shareHeader.module.scss";

function ShareHeader() {
  return (
    <header className={styles.header}>
      <h2 className={styles.heading}>Share your profile with friends!</h2>
      <p className={styles.subheading}>
        Make sure to share you achievements with your friends and be proud of
        them!
      </p>
    </header>
  );
}

export default ShareHeader;
