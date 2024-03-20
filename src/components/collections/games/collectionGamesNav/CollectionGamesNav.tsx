import { Dispatch, SetStateAction } from "react";
import { orderList } from "../../../../utils/data/global";
import { changeToUrlSlug } from "../../../../utils/functions/functions";
import UserGamesListNav from "../../../user/locale/userGamesListNav/UserGamesListNav";
import UserSearchInput from "../../../user/locale/userSearchInput/UserSearchInput";
import UserSelectContainer from "../../../user/locale/userSelectContainer/UserSelectContainer";
import UserSelector from "../../../user/locale/userSelector/UserSelector";

type CollectionGamesNavProps = {
  orderBy: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function CollectionGamesNav({
  orderBy,
  query,
  setQuery,
}: CollectionGamesNavProps) {
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
            (item) => changeToUrlSlug(item.item) === orderBy,
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

export default CollectionGamesNav;
