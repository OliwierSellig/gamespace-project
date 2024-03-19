import { ReviewType } from "../../../../utils/types/types";
import Pagination from "../../../global/pagination/Pagination";
import EmptyUserList from "../../locale/emptyUserList/EmptyUserList";
import ReviewItem from "../../locale/reviewItem/ReviewItem";
import styles from "./reviewsList.module.scss";

type ReviewListProps = {
  curPage: number;
  maxPage: number;
  list: ReviewType[];
};

function ReviewsList({ curPage, maxPage, list }: ReviewListProps) {
  if (!list || !list.length)
    return (
      <EmptyUserList>You have no reviews matching that query</EmptyUserList>
    );
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          {list.map((review, i) => (
            <ReviewItem
              rating={review.rating}
              key={i}
              game={review.game}
              author={review.author}
              date={review.editDate}
              review={review.content}
            />
          ))}
        </ul>
      </div>
      <Pagination
        padding={{ top: 3.6, left: 0, right: 0, bottom: 3.6 }}
        currentPage={curPage}
        maxPage={maxPage}
      />
    </>
  );
}

export default ReviewsList;
