import ShareHeader from "./ShareHeader";
import ShareLink from "./ShareLink";
import ShareSocialList from "./ShareSocialList";
import styles from "./shareContainer.module.scss";

function ShareContainer() {
  return (
    <section className={styles.container}>
      <ShareHeader />
      <ShareLink />
      <ShareSocialList />
    </section>
  );
}

export default ShareContainer;
