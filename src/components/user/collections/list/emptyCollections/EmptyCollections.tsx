import { ChildrenProp } from "../../../../../utils/types/types";
import Button from "../../../../global/button/Button";
import styles from "./emptyCollections.module.scss";

function EmptyCollections({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{children}</p>
      <Button
        style={{ name: "opacity", shade: "white" }}
        href={{ url: "/collections/create" }}
        sizeX="xl"
        borderRadius="sm"
        fontWeight={400}
        sizeY="lg"
      >
        Start a new Collection
      </Button>
    </div>
  );
}

export default EmptyCollections;
