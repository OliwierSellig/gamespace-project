import AmountBar from "./AmountBar";
import styles from "./dataItem.module.scss";

type DataItemProps = {
  barColor: "blue" | "pink";
  pos: number;
  item: { name: string; href: string; count: number };
  highestCount: number;
};

function DataItem({ barColor, pos, item, highestCount }: DataItemProps) {
  return (
    <li className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <span className={styles.pos}>{pos}</span>
          <h3 className={styles.name}>{item.name}</h3>
        </div>
        <span className={styles.games}>{`${item.count} games`}</span>
      </div>
      <AmountBar width={(item.count / highestCount) * 100} color={barColor} />
    </li>
  );
}

export default DataItem;
