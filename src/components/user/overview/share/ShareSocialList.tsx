import { getSocialsByOrder } from "../../../../utils/functions";
import ShareSocialItem from "./ShareSocialItem";
import styles from "./shareSocialList.module.scss";

function ShareSocialList() {
  return (
    <ul className={styles.container}>
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
    </ul>
  );
}

export default ShareSocialList;
