import { useRef } from "react";
import ListDay from "./ListDay";
import ListMonth from "./ListMonth";
import ListYear from "./ListYear";
import styles from "./listDate.module.scss";
import { useSearchParams, useRouter } from "next/navigation";

function ListDate() {
  const params = useSearchParams();
  const backgroundRef = useRef();
  const router = useRouter();

  return (
    <div
      ref={backgroundRef}
      className={styles.background}
      onClick={(e) => {
        if (e.target !== backgroundRef.current) return;
        router.back();
      }}
    >
      <div className={styles.container}>
        {params.get("set") === "day" && <ListDay />}
        {params.get("set") === "month" && <ListMonth />}
        {params.get("set") === "year" && <ListYear />}
      </div>
    </div>
  );
}

export default ListDate;
