"use client";

import { ReactNode } from "react";
import { useReviews } from "../../../contexts/reviewsContext/ReviewsContext";
import Modal from "../modal/Modal";
import ConfirmationPopup from "../popups/confirmationPupup/ConfirmationPopup";

type OpenDeleteReviewConfirmationProps = {
  children: ReactNode;
  id: number;
  handleClick?: () => void;
};

function OpenDeleteReviewConfirmation({
  children,
  handleClick,
  id,
}: OpenDeleteReviewConfirmationProps) {
  const { removeFromReviews } = useReviews();

  return (
    <Modal>
      <Modal.Open opens={`Delete review of game ${id} confirmation`}>
        <div>{children}</div>
      </Modal.Open>
      <Modal.Window
        locked={false}
        name={`Delete review of game ${id} confirmation`}
      >
        <ConfirmationPopup
          handleClick={async () => {
            await removeFromReviews(id);
            handleClick?.();
          }}
        >
          Are you sure you want to delete this review, this action cannot be
          undone
        </ConfirmationPopup>
      </Modal.Window>
    </Modal>
  );
}

export default OpenDeleteReviewConfirmation;
