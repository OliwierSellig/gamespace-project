import { ChildrenProp } from "../../utils/types";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./globalLayout.module.scss";

function GlobalLayout({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main> <Footer />
    </div>
  );
}

export default GlobalLayout;
