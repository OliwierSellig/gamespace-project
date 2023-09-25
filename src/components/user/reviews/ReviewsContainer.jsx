import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import BtnNav from "../../global/BtnNav";
import ReviewCard from "./ReviewsCard";
import styles from "./reviewsContainer.module.scss";
import { useNavigate } from "react-router-dom";

const AMOUNT_PER_PAGE = 8;

function ReviewsContainer({ searchQuery }) {
  const { reviews } = useUser();
  const [curPage, setCurPage] = useState(0);
  const navigate = useNavigate();
  const filteredReviews = reviews.filter((r) =>
    r.game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurPage(0);
  }, [searchQuery]);

  function goPrev() {
    if (!curPage) return;
    setCurPage((page) => page - 1);
  }

  function goNext() {
    if ((curPage + 1) * AMOUNT_PER_PAGE > filteredReviews.length) return;
    setCurPage((page) => page + 1);
  }

  function checkNext() {
    return (curPage + 1) * AMOUNT_PER_PAGE < filteredReviews.length;
  }

  return (
    <section className={styles.container}>
      {!filteredReviews.length &&
        (!reviews.length ? (
          <div className={styles.reviewsEmpty}>
            <p className={styles.reviewsEmpty__text}>
              No reviews yet, starty by reviewing a game
            </p>
            <button
              className={styles.reviewsEmpty__btn}
              onClick={() => navigate(`/search`)}
            >
              Search games
            </button>
          </div>
        ) : (
          <p className={styles.noKeyword}>No reviews for your keyword</p>
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
