import { useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { useUser } from "../../../../contexts/UserContext";
import Button from "../../../global/button/Button";
import TopRankedButton from "../../list/top/topRankedButton/TopRankedButton";

type UpdateGameStateButtonProps = { gameId: number; type?: "mini" | "default" };

function UpdateGameStateButton({
  gameId,
  type = "default",
}: UpdateGameStateButtonProps) {
  const { checkInLibrary, removeFromLibrary, addGameFromRanking, isLoggedIn } =
    useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const buttonTextContent = checkInLibrary(gameId) ? (
    <>
      <span>Remove</span>
      <HiOutlineMinusSm />
    </>
  ) : (
    <>
      <span>Add Game</span>
      <HiOutlinePlusSm />
    </>
  );

  async function updateGameState() {
    setIsLoading(true);
    try {
      if (checkInLibrary(gameId)) {
        await removeFromLibrary(gameId);
      } else {
        await addGameFromRanking(gameId);
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (type === "default")
    return (
      <TopRankedButton
        isLoading={isLoading}
        style="blue"
        handleClick={updateGameState}
      >
        {buttonTextContent}
      </TopRankedButton>
    );

  return (
    <Button
      isLoading={isLoading}
      href={{ url: !isLoggedIn ? "/login" : null }}
      transition="medium"
      additionalStyle={{ minWidth: "20rem" }}
      style={{ name: "fill", shade: "blue" }}
      handleClick={updateGameState}
    >
      {buttonTextContent}
    </Button>
  );
}

export default UpdateGameStateButton;
