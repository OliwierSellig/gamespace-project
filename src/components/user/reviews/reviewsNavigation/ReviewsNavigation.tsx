import { Dispatch, SetStateAction } from "react";
import { reviewOrderList } from "../../../../utils/data/user";
import { changeToUrlSlug } from "../../../../utils/functions/functions";
import UserGamesListNav from "../../locale/userGamesListNav/UserGamesListNav";
import UserSearchInput from "../../locale/userSearchInput/UserSearchInput";
import UserSelectContainer from "../../locale/userSelectContainer/UserSelectContainer";
import UserSelector from "../../locale/userSelector/UserSelector";

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
            (item) => changeToUrlSlug(item.item) === orderBy,
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
