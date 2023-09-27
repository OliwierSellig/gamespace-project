import { useNavigate } from "react-router-dom";
import styles from "./emptyList.module.scss";

function EmptyList({
  btnText = "Search for games",
  navigateTo = "/",
  children,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p className={styles.text}>{children}</p>
      <button className={styles.btn} onClick={() => navigate(navigateTo)}>
        <span className={styles.btn__text}>{btnText}</span>
        <img
          className={styles.btn__icon}
          src="/svg/look.svg"
          alt="Go to search"
        />
      </button>
    </div>
  );
}

export default EmptyList;
