import { platforms } from "../../../utils/data/home";
import PlatformsHomeItem from "../platfromsHomeItem/PlatformsHomeItem";
import SectionHeading from "../sectionHeading/SectionHeading";
import styles from "./platformsHome.module.scss";

function PlatformsHome() {
  return (
    <section className={styles.platforms}>
      <SectionHeading>What type of person are you?</SectionHeading>
      <nav className={styles.container}>
        {platforms.map((platform) => (
          <PlatformsHomeItem
            id={platform.id}
            Icon={platform.icon}
            name={platform.name}
            key={platform.id}
          />
        ))}
      </nav>
    </section>
  );
}

export default PlatformsHome;
