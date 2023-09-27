import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ListDay from "./ListDay";
import ListMonth from "./ListMonth";
import ListYear from "./ListYear";
import styles from "./listDate.module.scss";

function ListDate() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const backgroundRef = useRef();

  return (
    <div
      ref={backgroundRef}
      className={styles.background}
      onClick={(e) => {
        if (e.target !== backgroundRef.current) return;
        navigate(-1);
      }}
    >
      <div className={styles.container}>
        {searchParams.get("set") === "day" && <ListDay />}
        {searchParams.get("set") === "month" && <ListMonth />}
        {searchParams.get("set") === "year" && <ListYear />}
      </div>
    </div>
  );
}

export default ListDate;
