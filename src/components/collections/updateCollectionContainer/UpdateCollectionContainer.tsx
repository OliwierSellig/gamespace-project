import { ReactNode } from "react";
import ReturnButton from "./ReturnButton";
import styles from "./updateCollectionContainer.module.scss";

type UpdateCollectionContainerProps = {
  children: ReactNode;
  returnDest: string;
};

function UpdateCollectionContainer({
  children,
  returnDest,
}: UpdateCollectionContainerProps) {
  return (
    <div className={styles.container}>
      <ReturnButton href={returnDest} />
      {children}
    </div>
  );
}

export default UpdateCollectionContainer;
