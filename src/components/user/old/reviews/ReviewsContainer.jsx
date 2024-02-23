import { useEffect, useState } from "react";
import { useUser } from "../../../../contexts/UserContext";
import BtnNav from "../../../global/BtnNav";
import ReviewCard from "./ReviewsCard";
import NoSearchResults from "../../../global/NoSearchResults";
import EmptyList from "../../../global/EmptyList";
import styles from "./reviewsContainer.module.scss";

const AMOUNT_PER_PAGE = 8;

function ReviewsContainer({ searchQuery }) {
  const { reviews } = useUser();
  const [curPage, setCurPage] = useState(0);

  const filteredReviews = reviews.filter((r) =>
    r.game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ---------------------------------------------
  // Setting Current Page to 0 on Query Change
  // ---------------------------------------------

  useEffect(() => {
    setCurPage(0);
  }, [searchQuery]);

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function goPrev() {
    if (!curPage) return;
    setCurPage((page) => page - 1);
  }

  function goNext() {
    if ((curPage + 1) * AMOUNT_PER_PAGE >= filteredReviews.length) return;
    setCurPage((page) => page + 1);
  }

  function checkNext() {
    return (curPage + 1) * AMOUNT_PER_PAGE < filteredReviews.length;
  }

  return (
    <section className={styles.container}>
      {!filteredReviews.length &&
        (reviews.length ? (
          <NoSearchResults />
        ) : (
          <EmptyList navigateTo="/search">
            You have not reviewed any game yet.
          </EmptyList>
        ))}
      {filteredReviews.length > 0 && (
        <>
          <ul className={styles.list}>
            {filteredReviews
              .slice(
                0 + curPage * AMOUNT_PER_PAGE,
                AMOUNT_PER_PAGE + curPage * AMOUNT_PER_PAGE
              )
              .map((review) => (
                <ReviewCard key={review.game.id} review={review} />
              ))}
          </ul>
          <BtnNav
            curPage={curPage}
            checkNext={checkNext}
            checkPrev={curPage}
            onClickNext={goNext}
            onCLickPrev={goPrev}
          />
        </>
      )}
    </section>
  );
}

export default ReviewsContainer;
