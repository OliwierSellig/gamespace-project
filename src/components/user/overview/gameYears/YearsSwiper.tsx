import { fetchGames } from "../../../../lib/games";
import SwiperComponent from "../../../global/SwiperComponent";
import YearsItem from "./YearsItem";

async function YearsSwiper() {
  const games2018 = await fetchGames({
    dates: {
      fromDay: 1,
      fromMonth: 2,
      fromYear: 2018,
      toDay: 1,
      toMonth: 11,
      toYear: 2018,
    },
  });

  const games2015 = await fetchGames({
    dates: {
      fromDay: 1,
      fromMonth: 2,
      fromYear: 2015,
      toDay: 1,
      toMonth: 11,
      toYear: 2015,
    },
  });

  const games2023 = await fetchGames({
    dates: {
      fromDay: 1,
      fromMonth: 2,
      fromYear: 2023,
      toDay: 1,
      toMonth: 11,
      toYear: 2023,
    },
  });

  const list = [
    games2015.results,
    games2018.results,
    games2023.results,
    games2015.results,
    games2018.results,
    games2023.results,
  ];
  return (
    <SwiperComponent
      props={{
        default: {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          navigation: true,
        },
        breakpoints: [
          { minWidth: 1024, slidesPerView: 3 },
          { minWidth: 560, slidesPerView: 2, spaceBetween: 16 },
          { minWidth: 460, slidesPerView: 1.5 },
        ],
      }}
    >
      {list.map((games, i) => (
        <YearsItem
          key={i}
          year={new Date(games.at(0).released).getFullYear()}
          gameList={games}
        />
      ))}
    </SwiperComponent>
  );
}

export default YearsSwiper;
