import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import notFound from "../../../../../public/img/not-found.png";
import Button from "../../../global/button/Button";
import WelcomeList from "../welcomeList/WelcomeList";
import styles from "./welcomePopup.module.scss";

type WelcomePopupProps = {
  background: string;
  avatar: string;
  name: string;
};

function WelcomePopup({
  background,
  avatar,
  name = "Undefined User",
}: WelcomePopupProps) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.cover}>
          <Image src={background || notFound} alt="User Background" fill />
        </div>
        <div className={styles.avatar}>
          {avatar ? (
            <Image src={avatar} alt="User Avatar" fill />
          ) : (
            <HiOutlineUser />
          )}
        </div>
        <p className={styles.welcome}>Welcome to GameSpace</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>
          We are thrilled that you decided to join our community! Now you can
          interact withh all your favourite games in seconds.
        </p>
        <WelcomeList />
        <Button style={{ name: "scale", shade: "dark" }} borderRadius="sm">
          Start Exploring
        </Button>
      </div>
    </div>
  );
}

export default WelcomePopup;
