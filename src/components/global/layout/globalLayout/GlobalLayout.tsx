import { ChildrenProp } from "../../../../utils/types/types";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./globalLayout.module.scss";

function GlobalLayout({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default GlobalLayout;
