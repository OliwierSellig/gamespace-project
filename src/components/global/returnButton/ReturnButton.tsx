import Link from "next/link";
import { HiMiniXMark } from "react-icons/hi2";
import styles from "./returnButton.module.scss";

type ReturnButtonProps = { href: string; label?: string };

function ReturnButton({ href, label = "Go Back" }: ReturnButtonProps) {
  return (
    <Link aria-label={label} href={href} className={styles.btn}>
      <HiMiniXMark />
    </Link>
  );
}

export default ReturnButton;
