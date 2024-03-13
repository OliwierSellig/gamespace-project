import PageNotFound from "../../global/PageNotFound";
import CollectionContainer from "./CollectionContainer";

type CollectionViewProps = {
  id: string;
  orderBy: string;
  page: string;
};

function CollectionView({ id, orderBy, page }: CollectionViewProps) {
  if (!parseInt(id)) return <PageNotFound />;
  return <CollectionContainer orderBy={orderBy} page={page} />;
}

export default CollectionView;
