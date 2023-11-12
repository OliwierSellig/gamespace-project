import { useEffect, useState } from "react";
import BtnNav from "../../global/BtnNav";
import EmptyList from "../../global/EmptyList";
import NoSearchResults from "../../global/NoSearchResults";
import CollectionsCard from "./CollectionsCard";
import styles from "./collectionsContainer.module.scss";

const AMOUNT_PER_PAGE = 4;

function CollectionsContainer({ collections, query }) {
  const [curPage, setCurPage] = useState(0);

  const filteredCollections = collections.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  // ---------------------------------------------
  // Setting Current Page to 0 on Query Change
  // ---------------------------------------------

  useEffect(() => {
    setCurPage(0);
  }, [query]);

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function goPrev() {
    if (!curPage) return;
    setCurPage((page) => page - 1);
  }

  function goNext() {
    if ((curPage + 1) * AMOUNT_PER_PAGE >= filteredCollections.length) return;
    setCurPage((page) => page + 1);
  }

  function checkNext() {
    return (curPage + 1) * AMOUNT_PER_PAGE < filteredCollections.length;
  }

  return (
    <section className={styles.container}>
      {filteredCollections.length > 0 && (
        <>
          <ul className={styles.list}>
            {filteredCollections
              .slice(
                0 + curPage * AMOUNT_PER_PAGE,
                AMOUNT_PER_PAGE + curPage * AMOUNT_PER_PAGE
              )
              .map((collection) => (
                <CollectionsCard
                  collection={collection}
                  key={collection.slug}
                />
              ))}
          </ul>
          <BtnNav
            curPage={curPage}
            onCLickPrev={goPrev}
            onClickNext={goNext}
            checkNext={checkNext}
            checkPrev={curPage}
          />
        </>
      )}
      {!filteredCollections.length &&
        (!collections.length ? (
          <EmptyList navigateTo="/search">
            You have no collections yet, go on an create some!
          </EmptyList>
        ) : (
          <NoSearchResults />
        ))}
    </section>
  );
}

export default CollectionsContainer;
