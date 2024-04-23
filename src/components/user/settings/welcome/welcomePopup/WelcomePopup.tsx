import Image from "next/image";
import { useRef } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import notFound from "../../../../../../public/img/not-found.png";
import Button from "../../../../global/button/Button";
import WelcomeList from "../welcomeList/WelcomeList";
import styles from "./welcomePopup.module.scss";

type WelcomePopupProps = {
  background: string;
  avatar: string;
  name: string;
  handleClose: () => void;
};

function WelcomePopup({
  background,
  avatar,
  name = "Undefined User",
  handleClose,
}: WelcomePopupProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  return (
    <div
      onClick={(e) => {
        if (backgroundRef.current && e.target === backgroundRef.current) {
          handleClose();
        }
      }}
      className={styles.background}
      ref={backgroundRef}
    >
      <div className={styles.container}>
        <div className={styles.cover}>
          <Image
            src={background || notFound}
            sizes="(max-width: 720px) 95vw, 80rem"
            alt="User Background"
            fill
          />
        </div>
        <div className={styles.avatar}>
          {avatar ? (
            <Image src={avatar} alt="User Avatar" sizes="11.6rem" fill />
          ) : (
            <HiOutlineUser />
          )}
        </div>
        <p className={styles.welcome}>Welcome to GameSpace</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>
          We are thrilled that you decided to join our community! Now you can
          interact with all your favourite games in seconds.
        </p>
        <WelcomeList />
        <Button
          handleClick={handleClose}
          style={{ name: "scale", shade: "dark" }}
          borderRadius="sm"
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
}

export default WelcomePopup;
