"use client";
import { FiTrash2 } from "react-icons/fi";

import styles from "./configurationBox.module.scss";

type ConfigurationBoxProps = {
  name: string;
};

function ConfigurationBox({ name }: ConfigurationBoxProps) {
  return (
    <li className={styles.item}>
      <span>{name}</span>
      <div className={styles.box}>
        <button aria-label={`Remove ${name}`} className={styles.btn}>
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default ConfigurationBox;
