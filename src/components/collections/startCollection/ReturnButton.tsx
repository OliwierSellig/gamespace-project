"use client";

import { HiMiniXMark } from "react-icons/hi2";
import styles from "./returnButton.module.scss";
import { useRouter } from "next/navigation";

function ReturnButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (document.referrer.includes(window.location.hostname)) {
          router.back();
        } else {
          router.push("/");
        }
      }}
      className={styles.btn}
    >
      <HiMiniXMark />
    </button>
  );
}

export default ReturnButton;
