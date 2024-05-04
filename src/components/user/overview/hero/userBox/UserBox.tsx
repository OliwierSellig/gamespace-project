import UserBoxLayout from "../../../locale/userBoxLayout/userBoxLayout";
import CreatedAt from "../createdAt/CreatedAt";
import UserAvatar from "../userAvatar/UserAvatar";
import UserName from "../userName/UserName";
import styles from "./userBox.module.scss";

function UserBox() {
  return (
    <UserBoxLayout
      padding={{ top: 3.2, bottom: 3.2, left: 4.8, right: 4.8 }}
      additionalStyles={{
        display: "flex",
        gap: "2.8rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UserAvatar />
      <div className={styles.text}>
        <UserName />
        <CreatedAt />
      </div>
    </UserBoxLayout>
  );
}

export default UserBox;
