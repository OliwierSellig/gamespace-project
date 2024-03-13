import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import styles from "./collectionReturnButton.module.scss";
import Link from "next/link";

function CollectionReturnButton() {
  return (
    <Link href="/user/collections" className={styles.btn}>
      <HiMiniArrowSmallLeft />
    </Link>
  );
}

export default CollectionReturnButton;
