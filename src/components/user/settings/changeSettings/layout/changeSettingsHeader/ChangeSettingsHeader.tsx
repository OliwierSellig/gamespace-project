import PageNav from "../../../../../global/pageNav/PageNav";
import styles from "./changeSetttingsHeader.module.scss";

const list = [
  { name: "Avatar", handleClick: () => {}, isActive: true },
  { name: "Name", handleClick: () => {}, isActive: false },
  { name: "Background", handleClick: () => {}, isActive: false },
];

function ChangeSettingsHeader() {
  return (
    <header className={styles.container}>
      <p className={styles.heading}>Edit your profile</p>
      <PageNav list={list} />
    </header>
  );
}

export default ChangeSettingsHeader;
