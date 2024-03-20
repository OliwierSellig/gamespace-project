"use client";

import copy from "clipboard-copy";
import toast from "react-hot-toast";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import styles from "./shareLink.module.scss";

function ShareLink() {
  function copyUrl() {
    copy("https://gamespace.com/user/johnsanderson58");
    toast.success("Link copied successfully");
  }

  return (
    <div className={styles.container}>
      <button onClick={copyUrl} tabIndex={-1} className={styles.url}>
        https://gamespace.com/user/johnsanderson58
      </button>
      <button onClick={copyUrl} className={styles.btn}>
        <span>Copy</span>
        <HiOutlineDocumentDuplicate />
      </button>
    </div>
  );
}

export default ShareLink;
