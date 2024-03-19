import Link from "next/link";
import Image from "next/image";
import pageNotFound from "../../../../public/img/page-not-found.webp";
import styles from "./pageNotFound.module.scss";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <Image src={pageNotFound} fill sizes="100vw" alt="" priority />
      <div className={styles.content}>
        <h1 style={{ fontSize: "4rem" }} className={styles.heading}>
          <span className={styles.number}>404</span>
          <p className={styles.text}>
            We couldn&apos;t find the page you were looking for
          </p>
        </h1>
        <Link href="/" className={styles.link}>
          Main Page
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
