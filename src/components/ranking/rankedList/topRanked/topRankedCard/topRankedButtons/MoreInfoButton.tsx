import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import TopRankedButton from "./TopRankedButton";

type MoreInfoButtonsProps = { handleClick: () => void };

function MoreInfoButton({ handleClick }: MoreInfoButtonsProps) {
  return (
    <TopRankedButton handleClick={handleClick}>
      <span>More Info</span>
      <HiOutlineArrowUpOnSquare />
    </TopRankedButton>
  );
}

export default MoreInfoButton;
