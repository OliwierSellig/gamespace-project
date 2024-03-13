"use client";

import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import styles from "./collectionReturnButton.module.scss";
import { useRouter } from "next/navigation";

function CollectionReturnButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={styles.btn}>
      <HiMiniArrowSmallLeft />
    </button>
  );
}

export default CollectionReturnButton;
