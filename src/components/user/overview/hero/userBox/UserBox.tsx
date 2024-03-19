import Image from "next/image";
import styles from "./userBox.module.scss";
import userPhoto from "../../../../../../public/img/user.webp";
import UserBoxLayout from "../../../locale/userBoxLayout/userBoxLayout";

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
      <div className={styles.photo}>
        <Image src={userPhoto} alt="User Photo" sizes="14rem" fill />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>John Sanderson</p>
        <p className={styles.since}>On GameSpace since 24.06.2023</p>
      </div>
    </UserBoxLayout>
  );
}

export default UserBox;
