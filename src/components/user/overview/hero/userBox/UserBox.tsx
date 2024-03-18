import Image from "next/image";
import styles from "./userBox.module.scss";
import userPhoto from "../../../../../../public/img/user.webp";

function UserBox() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image src={userPhoto} alt="User Photo" sizes="14rem" fill />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>John Sanderson</p>
        <p className={styles.since}>On GameSpace since 24.06.2023</p>
      </div>
    </div>
  );
}

export default UserBox;
