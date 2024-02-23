import styles from "./shareAccount.module.scss";

function ShareAccount() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Share your account with friends!</h2>
      <ul className={styles.container}>
        <li className={styles.item}>
          <div className={`${styles.item__box} ${styles.item__box__fb}`} />
          <img
            tabIndex={0}
            role="button"
            className={`${styles.item__icon} ${styles.item__icon__fb}`}
            src="/svg/facebook-white.svg"
            alt="Facebook Icon"
          />
        </li>
        <li className={styles.item}>
          <div className={`${styles.item__box} ${styles.item__box__tt}`} />
          <img
            tabIndex={0}
            role="button"
            className={`${styles.item__icon} ${styles.item__icon__tt}`}
            src="/svg/twitter-white.svg"
            alt="Twitter Icon"
          />
        </li>
      </ul>
    </section>
  );
}

export default ShareAccount;
