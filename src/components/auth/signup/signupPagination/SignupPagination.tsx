import styles from "./signupPagination.module.scss";

type SingupPaginationProps = {
  length: number;
  activeTab: number;
  handleClick: (num: number) => void;
  getIsButtonEnabled: (stage: number) => boolean;
};

function SignupPagination({
  length,
  handleClick,
  activeTab,
  getIsButtonEnabled,
}: SingupPaginationProps) {
  return (
    <nav className={styles.pagination}>
      {Array.from({ length: length }, (_, i) => (
        <button
          type="button"
          className={`${styles.btn} ${styles[`btn__${!getIsButtonEnabled(!i ? i : i - 1) ? "disabled" : "enabled"}`]} ${i === activeTab ? styles.btn__active : ""}`}
          aria-label={`Swipe to component ${i}`}
          key={i}
          onClick={() => handleClick(i)}
          disabled={!getIsButtonEnabled(!i ? i : i - 1)}
        />
      ))}
    </nav>
  );
}

export default SignupPagination;
