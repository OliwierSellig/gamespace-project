import { fetchGames } from "../../../../lib/games";
import SwiperComponent from "../../../global/SwiperComponent";
import UserHeading from "../../layout/UserHeading";
import OverviewSection from "../layout/OverviewSection";
import YearsItem from "./YearsItem";

async function YearsContainer() {
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
    <OverviewSection>
      <UserHeading>Common Years</UserHeading>
      <SwiperComponent
        props={{
          default: {
            slidesPerView: 3,
            spaceBetween: 36,
            loop: true,
            navigation: true,
          },
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
    </OverviewSection>
  );
}

export default YearsContainer;
