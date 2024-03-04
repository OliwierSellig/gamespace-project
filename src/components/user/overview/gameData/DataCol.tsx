import Button from "../../../global/Button";
import DataItem from "./DataItem";
import EmptyDataCol from "./EmptyDataCol";
import styles from "./dataCol.module.scss";

type DataColProps = {
  data: {
    type: "Genres" | "Developers";
    list: {
      item: string;
      amount: number;
    }[];
  };
};

function DataCol({ data }: DataColProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.heading__number}>{data.list.length}</span>
        <span> {data.type}</span>
      </h2>
      {data.list.length > 0 && (
        <>
          <ul className={styles.list}>
            {data.list.slice(0, 5).map((item, i) => (
              <DataItem
                barColor={data.type === "Genres" ? "blue" : "pink"}
                key={i}
                pos={i + 1}
                item={item}
                highestCount={data.list.at(0).amount}
              />
            ))}
          </ul>
          {data.list.length < 5 && (
            <Button
              href={{ url: "/search" }}
              fontSize="sm"
              borderRadius="md"
              additionalStyle={{ marginTop: "3.6rem", alignSelf: "center" }}
            >
              Search Games
            </Button>
          )}
        </>
      )}
      {data.list.length === 0 && <EmptyDataCol listName={data.type} />}
    </div>
  );
}

export default DataCol;
