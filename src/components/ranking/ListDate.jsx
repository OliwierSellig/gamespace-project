import { useRef } from "react";
import ListDay from "./ListDay";
import ListMonth from "./ListMonth";
import styles from "./listDate.module.scss";
import ListYear from "./ListYear";
import { useNavigate, useSearchParams } from "react-router-dom";

function ListDate() {
  const navigate = useNavigate();
  const backgroundRef = useRef();
  const [searchParams] = useSearchParams();

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
