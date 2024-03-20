import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./shareSocialItem.module.scss";

type ShareSocialItemProps = {
  Icon: IconType;
  url: string;
  color: string;
  name: string;
};

function ShareSocialItem({ Icon, url, color, name }: ShareSocialItemProps) {
  return (
    <Link
      href={url}
      target="_blank"
      style={{ backgroundColor: color }}
      className={styles.container}
    >
      <Icon />
      <span>{name}</span>
    </Link>
  );
}

export default ShareSocialItem;
