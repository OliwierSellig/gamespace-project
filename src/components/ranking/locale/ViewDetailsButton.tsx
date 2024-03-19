import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import Button from "../../global/button/Button";

type ViewDetailsButtonProps = { gameId: number };

function ViewDetailsButton({ gameId }: ViewDetailsButtonProps) {
  return (
    <Button
      transition="medium"
      href={{ url: `/games/${gameId}` }}
      style={{ name: "fill", shade: "white" }}
    >
      <span>Details</span>
      <HiOutlineDocumentDuplicate />
    </Button>
  );
}

export default ViewDetailsButton;
