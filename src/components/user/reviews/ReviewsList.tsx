import Pagination from "../../global/Pagination";
import EmptyUserList from "../locale/emptyUserList/EmptyUserList";
import ReviewItem from "../locale/reviewItem/ReviewItem";
import styles from "./reviewsList.module.scss";

type ReviewListProps = {
  curPage: number;
  maxPage: number;
  list: {
    game: { name: string; cover: string };
    review: string;
    author: string;
    date: string;
  }[];
};

function ReviewsList({ curPage, maxPage, list }: ReviewListProps) {
  if (!list || !list.length)
    return <EmptyUserList>You have no games matching that query</EmptyUserList>;
  return (
    <>
      <ul className={styles.container}>
        {list.map((review, i) => (
          <ReviewItem
            key={i}
            game={review.game}
            author={review.author}
            date={review.date}
            review={review.review}
          />
        ))}
      </ul>
      <Pagination
        padding={{ top: 3.6, left: 0, right: 0, bottom: 3.6 }}
        currentPage={curPage}
        maxPage={maxPage}
      />
    </>
  );
}

export default ReviewsList;
