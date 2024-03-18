import ShareHeader from "../shareHeader/ShareHeader";
import ShareLink from "../shareLink/ShareLink";
import ShareSocialList from "../shareSocialList/ShareSocialList";
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
