import { Dispatch, SetStateAction } from "react";
import UserGamesListNav from "../locale/userGamesListNav/UserGamesListNav";
import UserSelectContainer from "../locale/userSelectContainer/UserSelectContainer";
import UserSelector from "../locale/userSelectContainer/UserSelector";
import UserSearchInput from "../locale/userSearchInput/UserSearchInput";
import { changeToUrlSlug } from "../../../utils/functions";
import { reviewOrderList } from "../../../utils/data";

type ReviewsNavigationProps = {
  orderBy: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function ReviewsNavigation({
  orderBy,
  query,
  setQuery,
}: ReviewsNavigationProps) {
  const orderByList = reviewOrderList.map((item) => {
    return {
      item,
      href: `?order=${changeToUrlSlug(item)}`,
    };
  });

  return (
    <UserGamesListNav>
      <UserSelectContainer>
        <UserSelector
          activeItem={orderByList.find(
            (item) => changeToUrlSlug(item.item) === orderBy
          )}
          list={orderByList}
        >
          Sort By
        </UserSelector>
      </UserSelectContainer>
      <UserSearchInput
        placeholder="Search Reviews"
        inputValue={query}
        handleChange={setQuery}
      />
    </UserGamesListNav>
  );
}

export default ReviewsNavigation;
