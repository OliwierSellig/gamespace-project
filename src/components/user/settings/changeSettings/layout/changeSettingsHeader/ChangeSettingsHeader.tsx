import PageNav from "../../../../../global/pageNav/PageNav";
import styles from "./changeSetttingsHeader.module.scss";

type ChangeSettingsHeaderProps = {
  currentSlide: number;
  setSlide: (num: number) => void;
};

const list = ["Avatar", "Name", "Background"];

function ChangeSettingsHeader({
  currentSlide,
  setSlide,
}: ChangeSettingsHeaderProps) {
  const filledList = list.map((name, i) => {
    return {
      name,
      handleClick: () => setSlide(i),
      isActive: currentSlide === i,
    };
  });

  return (
    <header className={styles.container}>
      <p className={styles.heading}>Edit your profile</p>
      <PageNav list={filledList} />
    </header>
  );
}

export default ChangeSettingsHeader;
