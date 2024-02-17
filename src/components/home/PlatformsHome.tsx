import Link from "next/link";
import styles from "./platformsHome.module.scss";
import { platforms } from "../../utils/data";
import SectionHeading from "./SectionHeading";

function PlatformsHome() {
  return (
    <section className={styles.platforms}>
      <SectionHeading>What type of person are you?</SectionHeading>
      <nav className={styles.container}>
        {platforms.map((platform, i) => (
          <Link
            href={`/search?platforms=${platform.id}`}
            className={styles.item}
            key={i}
            aria-label={`Search ${platform.name}`}
          >
            <platform.icon />
            <p className={styles.name}>{platform.name}</p>
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default PlatformsHome;
