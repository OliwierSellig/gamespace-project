import Link from "next/link";
import styles from "./collectionsGamePreviewCard.module.scss";
import Image from "next/image";
import notFound from "../../../../../../public/img/not-found.png";

type CollectionsGamePreviewCardProps = {
  cover: string;
  id: number;
  name: string;
};

function CollectionsGamePreviewCard({
  cover = notFound,
  id,
  name = "Undefined Game",
}: CollectionsGamePreviewCardProps) {
  return (
    <Link className={styles.link} href={`/games/${id}`}>
      <Image
        src={cover}
        fill
        alt={`${name} cover`}
        sizes="(max-width: 480px) 45vw (max-width: 980px) 35vw  (max-width: 1200) 20vw (max-width: 1600px) 14vw, 22rem"
      />
    </Link>
  );
}

export default CollectionsGamePreviewCard;
