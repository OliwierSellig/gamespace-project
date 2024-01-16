import styles from "./btnNav.module.scss";

function BtnNav({ checkNext, checkPrev, onClickNext, onCLickPrev, curPage }) {
  return (
    <div className={styles.btnBox}>
      <button
        className={`${styles.btn} ${checkPrev ? styles.btn__active : ""}`}
        onClick={onCLickPrev}
      >
        <img
          className={styles.btn__icon}
          src={
            checkPrev
              ? "/svg/round-arrow-left-able.svg"
              : "/svg/round-arrow-left-disable.svg"
          }
          alt="Arrow left"
        />
      </button>
      <span className={styles.page}>{curPage + 1}</span>
      <button
        className={`${styles.btn} ${checkNext?.() ? styles.btn__active : ""}`}
        onClick={onClickNext}
      >
        <img
          className={styles.btn__icon}
          src={
            checkNext?.()
              ? "/svg/round-arrow-right-able.svg"
              : "/svg/round-arrow-right-disable.svg"
          }
          alt="Arrow right"
        />
      </button>
    </div>
  );
}

export default BtnNav;
