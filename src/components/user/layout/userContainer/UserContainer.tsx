import { userNavPages } from "../../../../utils/data/user";
import { ChildrenProp } from "../../../../utils/types/types";
import PagesNav from "../../../global/pageNav/PageNav";
import LogoutPopup from "../../../global/popups/logoutPopup/LogoutPopup";
import ChangeSettingsToggle from "../../settings/changeSettings/layout/changeSettingsToggle/ChangeSettingsToggle";
import NewUserWelcome from "../../settings/welcome/newUserWelcome/NewUserWelcome";
import ProfileOptions from "../profileOptions/ProfileOptions";
import styles from "./userContainer.module.scss";

function UserContainer({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ProfileOptions />
        <PagesNav list={userNavPages} />
      </header>
      {children}
      <ChangeSettingsToggle />
      <LogoutPopup />
      <NewUserWelcome />
    </div>
  );
}

export default UserContainer;
