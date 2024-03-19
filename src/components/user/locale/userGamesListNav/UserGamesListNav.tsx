import { ChildrenProp } from "../../../../utils/types/types";
import styles from "./userGamesListNav.module.scss";

function UserGamesListNav({ children }: ChildrenProp) {
  return <nav className={styles.container}>{children}</nav>;
}

export default UserGamesListNav;
