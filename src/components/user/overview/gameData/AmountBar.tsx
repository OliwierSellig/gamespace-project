import styles from "./amountBar.module.scss";

type AmountBarProps = {
  color: "blue" | "pink";
  width: number;
};

function AmountBar({ color, width }: AmountBarProps) {
  return (
    <div
      style={{ width: `${width}%` }}
      className={`${styles.bar} ${styles[`bar__${color}`]}`}
    />
  );
}

export default AmountBar;
