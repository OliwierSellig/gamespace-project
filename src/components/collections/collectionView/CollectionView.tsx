import PageNotFound from "../../global/PageNotFound";
import CollectionContainer from "./CollectionContainer";

type CollectionViewProps = {
  id: string;
  orderBy: string;
};

function CollectionView({ id, orderBy }: CollectionViewProps) {
  if (!parseInt(id)) return <PageNotFound />;
  return <CollectionContainer orderBy={orderBy} />;
}

export default CollectionView;
