import UserTopPlatforms from "./UserTopPlatforms";
import styles from "./userHeader.module.scss";

function UserHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.account}>
        <div role="button" className={styles.account__imgBox}>
          <img
            className={styles.account__img}
            src="/img/user.webp"
            alt="User Avatar"
          />
          <span tabIndex={0} className={styles.account__imgText}>
            Change Avatar
          </span>
        </div>
        <div className={styles.account__content}>
          <span className={styles.account__name}>John Sanderson</span>
          <span className={styles.account__since}>
            On GameHub since&nbsp;
            <span className={styles.account__date}>04.06.2023</span>
          </span>
        </div>
        <img
          tabIndex={0}
          role="button"
          className={styles.account__settings}
          src="/svg/settings.svg"
          alt="Open Settings"
        />
      </div>
      <UserTopPlatforms />
    </header>
  );
}

export default UserHeader;
