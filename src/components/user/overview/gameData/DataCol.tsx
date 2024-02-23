import DataItem from "./DataItem";
import styles from "./dataCol.module.scss";

type DataColProps = {
  data: {
    type: "Genres" | "Developers";
    list: {
      name: string;
      href: string;
      count: number;
    }[];
  };
};

function DataCol({ data }: DataColProps) {
  const filteredList = data.list.sort((a, b) => b.count - a.count).slice(0, 5);
  const highestGameCount = filteredList.at(0).count;
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.heading__number}>{data.list.length}</span>
        <span> {data.type}</span>
      </h2>
      <ul className={styles.list}>
        {filteredList.map((item, i) => (
          <DataItem
            barColor={data.type === "Genres" ? "blue" : "pink"}
            key={i}
            pos={i + 1}
            item={item}
            highestCount={highestGameCount}
          />
        ))}
      </ul>
    </div>
  );
}

export default DataCol;
