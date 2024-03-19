import { Dispatch, SetStateAction } from "react";
import { orderList } from "../../../../utils/data/global";
import { changeToUrlSlug } from "../../../../utils/functions";
import UserGamesListNav from "../../locale/userGamesListNav/UserGamesListNav";
import UserSearchInput from "../../locale/userSearchInput/UserSearchInput";
import UserSelectContainer from "../../locale/userSelectContainer/UserSelectContainer";
import UserSelector from "../../locale/userSelectContainer/UserSelector";

type WishlistNavigationProps = {
  orderBy: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function WishlistNavigation({
  orderBy,
  query,
  setQuery,
}: WishlistNavigationProps) {
  const orderByList = orderList.map((item) => {
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
        placeholder="Search Games"
        inputValue={query}
        handleChange={setQuery}
      />
    </UserGamesListNav>
  );
}

export default WishlistNavigation;
