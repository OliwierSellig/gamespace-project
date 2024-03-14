"use client";
import { useState } from "react";
import Button from "../../global/Button";
import styles from "./collectionPropertiesBox.module.scss";
import UserInput from "../../global/UserInput";
import { useUser } from "../../../contexts/UserContext";
import { useRouter } from "next/navigation";

function CollectionsPropertiesBox() {
  const { addToCollections } = useUser();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Start a new Collection</h1>

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
        handleClick={() => {
          const id = addToCollections({
            title: title,
            description: description,
            author: "John Sanderson",
            creationDate: new Date(),
            games: [],
          });
          router.push(id.toString());
        }}
      >
        Start a Collection
      </Button>
    </div>
  );
}

export default CollectionsPropertiesBox;
