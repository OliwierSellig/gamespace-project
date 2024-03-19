import { ReactNode } from "react";
import Button from "../../../global/button/Button";
import styles from "./emptyUserList.module.scss";

type EmptyUserListProps = { children?: ReactNode };

function EmptyUserList({ children }: EmptyUserListProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {children ||
          "Your list seems to be empty, please add some games to fill this page."}
      </p>
      <Button
        style={{ name: "opacity", shade: "white" }}
        borderRadius="md"
        sizeX="xl"
        sizeY="lg"
        fontWeight={400}
        href={{ url: "/search" }}
      >
        Search Games
      </Button>
    </div>
  );
}

export default EmptyUserList;
