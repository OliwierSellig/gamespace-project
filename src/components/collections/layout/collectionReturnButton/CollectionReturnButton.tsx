import Link from "next/link";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import styles from "./collectionReturnButton.module.scss";

function CollectionReturnButton() {
  return (
    <Link href="/user/collections" aria-label="Go Back" className={styles.btn}>
      <HiMiniArrowSmallLeft />
    </Link>
  );
}

export default CollectionReturnButton;
