"use client";
import { FiTrash2 } from "react-icons/fi";
import styles from "./configurationBox.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

type ConfigurationBoxProps = {
  name: string;
  type: "dev" | "genre" | "platform";
};

function ConfigurationBox({ name, type }: ConfigurationBoxProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  function clearBrowsing() {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.delete(type);
    const restParams = current.toString();
    const query = restParams ? `?${restParams}` : "";
    router.push(`${pathname}${query}`);
    toast.success("Filter removed succesfully");
  }

  return (
    <li className={styles.item}>
      <span>{name}</span>
      <div className={styles.box}>
        <button
          onClick={clearBrowsing}
          aria-label={`Remove ${name}`}
          className={styles.btn}
        >
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default ConfigurationBox;
