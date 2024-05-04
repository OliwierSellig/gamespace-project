"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SingleGameItemToBasicItemType } from "../../../../utils/functions/functions";
import {
  CollectionItemType,
  SingleGameItem,
} from "../../../../utils/types/types";
import { useCollections } from "../../../../contexts/collectionsContext/CollectionsContext";
import { useUser } from "../../../../contexts/userContext/UserContext";
import Button from "../../button/Button";
import UserInput from "../../userInput/UserInput";
import styles from "./collectionPropertiesBox.module.scss";

type CollectionsPropertiesBoxProps = {
  action:
    | { type: "add"; game?: SingleGameItem }
    | { type: "update"; currentCollection: CollectionItemType };
};

function CollectionsPropertiesBox({ action }: CollectionsPropertiesBoxProps) {
  const { state } = useUser();
  const { addToCollections, updateCollection } = useCollections();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(
    action.type === "update" ? action.currentCollection.title : "",
  );
  const [description, setDescription] = useState<string>(
    action.type === "update" ? action.currentCollection.description : "",
  );
  const router = useRouter();
  const username = state.profileSettings.name;

  async function handleSubmit() {
    setIsLoading(true);
    try {
      if (action.type === "update") {
        await updateCollection(
          { type: "updateDetails", content: { title, description } },
          action.currentCollection.id,
        );
        router.push(`/collections/${action.currentCollection.id}`);
      } else {
        const id = await addToCollections({
          title: title,
          description: description,
          author: username,
          creationDate: new Date(),
          games:
            action.game && action.game.id
              ? [SingleGameItemToBasicItemType(action.game)]
              : [],
        });
        router.push(`/collections/${id.toString()}`);
      }
    } finally {
      setIsLoading(false);
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
        isLoading={isLoading}
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
