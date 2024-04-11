import styles from "./signupPagination.module.scss";

type SingupPaginationProps = {
  length: number;
  activeTab: number;
  handleClick: (num: number) => void;
};

function SignupPagination({
  length,
  handleClick,
  activeTab,
}: SingupPaginationProps) {
  return (
    <nav className={styles.pagination}>
      {Array.from({ length: length }, (_, i) => (
        <button
          className={`${styles.btn} ${i === activeTab ? styles.btn__active : ""}`}
          aria-label={`Swipe to component ${i}`}
          key={i}
          onClick={() => handleClick(i)}
        />
      ))}
    </nav>
  );
}

export default SignupPagination;
