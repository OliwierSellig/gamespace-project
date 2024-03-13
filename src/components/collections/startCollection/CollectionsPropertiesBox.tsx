"use client";
import { useState } from "react";
import Button from "../../global/Button";

import styles from "./collectionPropertiesBox.module.scss";
import UserInput from "../../global/UserInput";

function CollectionsPropertiesBox() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
        additionalStyle={{ width: "100%" }}
        style={{ name: "opacity", shade: "white" }}
        borderRadius="sm"
        sizeY="lg"
        handleClick={() => console.log("Collection started")}
      >
        Start a Collection
      </Button>
    </div>
  );
}

export default CollectionsPropertiesBox;
