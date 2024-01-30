import BrowseItem from "./BrowseItem";
import styles from "./browseList.module.scss";

type BrowseListProps = {
  browseList: [];
};

function BrowseList({ browseList }: BrowseListProps) {
  console.log(browseList);
  return (
    <ul className={styles.container}>
      {Array.from({ length: 20 }, (_, i) => (
        <BrowseItem key={i} />
      ))}
    </ul>
  );
}

export default BrowseList;
