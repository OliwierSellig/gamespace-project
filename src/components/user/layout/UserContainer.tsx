import { userNavPages } from "../../../utils/data/user";
import { ChildrenProp } from "../../../utils/types";
import PagesNav from "../../global/pageNav/PageNav";
import ProfileOptions from "./ProfileOptions";
import styles from "./userContainer.module.scss";

function UserContainer({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ProfileOptions />
        <PagesNav list={userNavPages} />
      </header>
      {children}
    </div>
  );
}

export default UserContainer;
