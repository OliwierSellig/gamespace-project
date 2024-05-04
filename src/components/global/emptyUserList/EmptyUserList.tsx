import { ReactNode } from "react";
import Button from "../button/Button";
import styles from "./emptyUserList.module.scss";

type EmptyUserListProps = {
  children?: ReactNode;
  button?: { text: string; navigateTo: "searchGames" | "createCollection" };
};

function EmptyUserList({
  children,
  button = { text: "Search Games", navigateTo: "searchGames" },
}: EmptyUserListProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {children ||
          "Your list seems to be empty, please add some games to fill this page."}
      </p>
      <Button
        style={{ name: "opacity", shade: "white" }}
        borderRadius="sm"
        sizeX="xl"
        sizeY="lg"
        fontWeight={400}
        href={{
          url:
            button.navigateTo === "searchGames"
              ? "/search"
              : "/user/create-collection",
        }}
      >
        {button.text}
      </Button>
    </div>
  );
}

export default EmptyUserList;
