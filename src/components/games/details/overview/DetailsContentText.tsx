import { ReactNode } from "react";
import styles from "./detailsContentText.module.scss";
import Link from "next/link";

type DetailsConentTextProps = {
  children: ReactNode;
  type?: "span" | "paragraph" | "link";
  href?: string;
};

function DetailsContentText({
  type = "paragraph",
  href = "/",
  children,
}: DetailsConentTextProps) {
  if (type === "span")
    return <span className={styles.content}>{children}</span>;
  if (type === "paragraph") return <p className={styles.content}>{children}</p>;
  if (type === "link")
    return (
      <Link href={href} className={`${styles.content} ${styles.link}`}>
        {children}
      </Link>
    );
  return <div></div>;
}

export default DetailsContentText;
