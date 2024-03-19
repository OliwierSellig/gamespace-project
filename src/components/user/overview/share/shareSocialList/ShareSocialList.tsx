import { getSocialsByOrder } from "../../../../../utils/functions/functions";
import ShareSocialItem from "../shareSocialItem/ShareSocialItem";
import styles from "./shareSocialList.module.scss";

function ShareSocialList() {
  return (
    <nav className={styles.container}>
      {getSocialsByOrder(["Facebook", "Twitter/X", "Discord", "Instagram"]).map(
        (item) => (
          <ShareSocialItem
            Icon={item.icon}
            name={item.name}
            url={item.url}
            color={item.color}
            key={item.url}
          />
        )
      )}
    </nav>
  );
}

export default ShareSocialList;
