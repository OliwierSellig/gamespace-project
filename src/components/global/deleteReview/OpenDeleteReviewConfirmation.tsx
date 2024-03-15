"use client";

import { ReactNode } from "react";
import { useUser } from "../../../contexts/UserContext";
import Modal from "../Modal";
import ConfirmationPopup from "../popups/ConfirmationPopup";

type OpenDeleteReviewConfirmationProps = { children: ReactNode; id: number };

function OpenDeleteReviewConfirmation({
  children,
  id,
}: OpenDeleteReviewConfirmationProps) {
  const { removeFromReviews } = useUser();

  return (
    <Modal>
      <Modal.Open opens={`Delete review of game ${id} confirmation`}>
        <div>{children}</div>
      </Modal.Open>
      <Modal.Window
        locked={false}
        name={`Delete review of game ${id} confirmation`}
      >
        <ConfirmationPopup handleClick={() => removeFromReviews(id)}>
          Are you sure you want to delete this review, this action cannot be
          undone
        </ConfirmationPopup>
      </Modal.Window>
    </Modal>
  );
}

export default OpenDeleteReviewConfirmation;
