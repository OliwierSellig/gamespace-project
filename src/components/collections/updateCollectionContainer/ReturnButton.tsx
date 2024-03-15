import { HiMiniXMark } from "react-icons/hi2";
import styles from "./returnButton.module.scss";
import Link from "next/link";

type ReturnButtonProps = { href: string };

function ReturnButton({ href }: ReturnButtonProps) {
  return (
    <Link href={href} className={styles.btn}>
      <HiMiniXMark />
    </Link>
  );
}

export default ReturnButton;
