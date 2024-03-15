"use client";
import { useState } from "react";
import Button from "../../global/Button";
import styles from "./collectionPropertiesBox.module.scss";
import UserInput from "../../global/UserInput";
import { useUser } from "../../../contexts/UserContext";
import { useRouter } from "next/navigation";
import { CollectionItemType, SingleGameItem } from "../../../utils/types";
import { SingleGameItemToBasicItemType } from "../../../utils/functions";

type CollectionsPropertiesBoxProps = {
  action:
    | { type: "add"; game?: SingleGameItem }
    | { type: "update"; currentCollection: CollectionItemType };
};

function CollectionsPropertiesBox({ action }: CollectionsPropertiesBoxProps) {
  const { addToCollections, updateCollection } = useUser();
  const [title, setTitle] = useState<string>(
    action.type === "update" ? action.currentCollection.title : ""
  );
  const [description, setDescription] = useState<string>(
    action.type === "update" ? action.currentCollection.description : ""
  );
  const router = useRouter();

  function handleSubmit() {
    if (action.type === "update") {
      updateCollection(
        { type: "updateTitle", content: title },
        action.currentCollection.id
      );
      updateCollection(
        { type: "updateDescription", content: description },
        action.currentCollection.id
      );
      router.push(`/collections/${action.currentCollection.id}`);
    } else {
      const id = addToCollections({
        title: title,
        description: description,
        author: "John Sanderson",
        creationDate: new Date(),
        games:
          action.game && action.game.id
            ? [SingleGameItemToBasicItemType(action.game)]
            : [],
      });
      router.push(`/collections/${id.toString()}`);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {action.type === "update"
          ? "Update existing Collection"
          : "Start a new Collection"}
      </h1>

      <UserInput
        label="Title"
        placeholder="Write collection title..."
        maxCharacters={40}
        value={title}
        handleChange={setTitle}
        type={{ name: "text" }}
        additionalStyle={{ marginBottom: "3.2rem" }}
      />
      <UserInput
        label="Description"
        placeholder="Write description..."
        maxCharacters={450}
        value={description}
        handleChange={setDescription}
        type={{ name: "textArea", height: 24 }}
        additionalStyle={{ marginBottom: "3.2rem" }}
      />

      <Button
        disabled={!title}
        additionalStyle={{ width: "100%" }}
        style={{ name: "opacity", shade: "white" }}
        borderRadius="sm"
        sizeY="lg"
        handleClick={handleSubmit}
      >
        {action.type === "update" ? "Update Collection" : "Start a Collection"}
      </Button>
    </div>
  );
}

export default CollectionsPropertiesBox;
