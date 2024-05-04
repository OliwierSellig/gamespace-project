import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./platformsHomeItem.module.scss";

type PlatformsHomeItemProps = {
  id: number;
  name: string;
  Icon: IconType;
};

function PlatformsHomeItem({ id, name, Icon }: PlatformsHomeItemProps) {
  return (
    <Link
      href={`/search?platform=${id}`}
      className={styles.item}
      aria-label={`Search ${name}`}
    >
      <Icon />
      <p className={styles.name}>{name}</p>
    </Link>
  );
}

export default PlatformsHomeItem;
