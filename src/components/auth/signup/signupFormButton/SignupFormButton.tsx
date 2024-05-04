import Button from "../../../global/button/Button";

type SignupFormButtonProps = {
  setNextPage: () => void;
  isLastPage: boolean;
  buttonDisabled: boolean;
  isLoading: boolean;
};

function SignupFormButton({
  isLastPage,
  buttonDisabled,
  setNextPage,
  isLoading,
}: SignupFormButtonProps) {
  if (isLastPage)
    return (
      <Button
        isLoading={isLoading}
        type="submit"
        style={{ name: "opacity", shade: "white" }}
        borderRadius="md"
        disabled={buttonDisabled}
      >
        Create Account
      </Button>
    );

  return (
    <Button
      handleClick={setNextPage}
      type="button"
      style={{ name: "opacity", shade: "white" }}
      borderRadius="md"
      disabled={buttonDisabled}
    >
      Continue
    </Button>
  );
}

export default SignupFormButton;
