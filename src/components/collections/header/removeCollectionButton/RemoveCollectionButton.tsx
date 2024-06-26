import { useRouter } from "next/navigation";
import { useCollections } from "../../../../contexts/collectionsContext/CollectionsContext";
import Modal from "../../../global/modal/Modal";
import ConfirmationPopup from "../../../global/popups/confirmationPupup/ConfirmationPopup";
import CollectionNavButton from "../collectionNavButton/CollectionNavButtonLayout";

type RemoveCollectionButtonProps = {
  id: number;
};

function RemoveCollectionButton({ id }: RemoveCollectionButtonProps) {
  const { removeFromCollections } = useCollections();
  const router = useRouter();

  return (
    <Modal>
      <Modal.Open opens={`Remove collection ${id}`}>
        <div>
          <CollectionNavButton
            padding={{ top: 1.6, bottom: 1.6, left: 3.6, right: 3.6 }}
          >
            Delete Collection
          </CollectionNavButton>
        </div>
      </Modal.Open>
      <Modal.Window locked={false} name={`Remove collection ${id}`}>
        <ConfirmationPopup
          handleClick={async () => {
            await removeFromCollections(id);
            router.push("/user/collections");
          }}
        >
          Are you sure you want to delete this collection? This action cannot be
          undone.
        </ConfirmationPopup>
      </Modal.Window>
    </Modal>
  );
}

export default RemoveCollectionButton;
