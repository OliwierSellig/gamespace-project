import Link from "next/link";
import styles from "./platformsHome.module.scss";
import Image from "next/image";
import { platforms } from "@/utils/data";

function PlatformsHome() {
  return (
    <section className={styles.platforms}>
      <h2 className={styles.heading}>So, what type of person are you?</h2>
      <nav className={styles.container}>
        {platforms.map((platform) => (
          <Link
            href={`/search?platforms=${platform.id}`}
            className={styles.item}
            key={crypto.randomUUID()}
            aria-label={`Search ${platform.name}`}
          >
            <platform.icon />
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default PlatformsHome;
