import { LogItemType } from "../../../../utils/types";
import FilterLogs from "./FilterLogs";
import LogItem from "./LogItem";
import styles from "./logContainer.module.scss";

const logs: LogItemType[] = [
  {
    date: "27.01.2024",
    actions: [
      {
        sub: "Removed from played",
        link: { name: "Red Dead Redemption 2", href: "/search" },
      },
    ],
  },
  {
    date: "19.01.2024",
    actions: [
      {
        sub: "Added to library",
        link: { name: "Elden Ring", href: "/search" },
      },
    ],
  },
  {
    date: "13.01.2024",
    actions: [
      {
        sub: "Wishlisted",
        link: { name: "Assasin's Creed Valhalla", href: "/search" },
      },
    ],
  },
  {
    date: "09.01.2024",
    actions: [
      {
        sub: "Removed",
        link: { name: "Sekiro: Shadow Die Twice", href: "/search" },
      },
      { sub: "from", link: { name: "RPG Session with cats", href: "/browse" } },
    ],
  },
  {
    date: "09.01.2024",
    actions: [
      {
        sub: "Removed",
        link: { name: "Sekiro: Shadow Die Twice", href: "/search" },
      },
      { sub: "from", link: { name: "RPG Session with cats", href: "/browse" } },
    ],
  },
  {
    date: "09.01.2024",
    actions: [
      {
        sub: "Removed",
        link: { name: "Sekiro: Shadow Die Twice", href: "/search" },
      },
      { sub: "from", link: { name: "RPG Session with cats", href: "/browse" } },
    ],
  },
  {
    date: "09.01.2024",
    actions: [
      {
        sub: "Removed",
        link: { name: "Sekiro: Shadow Die Twice", href: "/search" },
      },
      { sub: "from", link: { name: "RPG Session with cats", href: "/browse" } },
    ],
  },
  {
    date: "09.01.2024",
    actions: [
      {
        sub: "Removed",
        link: { name: "Sekiro: Shadow Die Twice", href: "/search" },
      },
      { sub: "from", link: { name: "RPG Session with cats", href: "/browse" } },
    ],
  },
];

function LogContainer() {
  return (
    <div className={styles.container}>
      <FilterLogs />
      <div className={styles.box}>
        <ul className={styles.list}>
          {logs.map((log, i) => (
            <LogItem key={i} log={log} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LogContainer;
