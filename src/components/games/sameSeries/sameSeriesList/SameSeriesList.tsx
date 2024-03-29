import { FetchedGameItem } from "../../../../utils/types/types";
import SwiperComponent from "../../../global/swiperComponent/SwiperComponent";
import SameSeriesCard from "../sameSeriesCard/SameSeriesCard";
import styles from "./sameSeriesList.module.scss";

type SameSeriesListProps = {
  list: FetchedGameItem[];
};

function SameSeriesList({ list }: SameSeriesListProps) {
  if (!list || !list.length)
    return (
      <p className={styles.empty}>We couldn&apos;t find any games, sorry...</p>
    );

  if (list.length === 1)
    return (
      <div className={styles.singleContainer}>
        <SameSeriesCard game={list.at(0)} />
      </div>
    );
  return (
    <SwiperComponent
      props={{
        default: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: true,
          pagination: true,
        },
        breakpoints: [{ minWidth: 480, slidesPerView: 2 }],
      }}
    >
      {list.map((item) => (
        <SameSeriesCard key={item.id} game={item} />
      ))}
    </SwiperComponent>
  );
}

export default SameSeriesList;
