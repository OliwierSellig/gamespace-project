import { CollectionItemType } from "../../../../utils/types/types";
import CollectionAuthor from "../collectionAuthor/CollectionAuthor";
import CollectionTitle from "../collectionTitle/CollectionTitle";

type CollectionHeaderProps = { collection: CollectionItemType };

function CollectionHeader({ collection }: CollectionHeaderProps) {
  return (
    <header>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionAuthor
        date={collection.creationDate}
        name={collection.author}
      />
    </header>
  );
}

export default CollectionHeader;
