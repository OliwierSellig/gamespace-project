import AuthContainer from "../../locale/authContainer/AuthContainer";
import AuthHeading from "../../locale/authHeading/AuthHeading";
import SignupContainer from "../signupContainer/SignupContainer";

function SingupComponent() {
  return (
    <AuthContainer ctaType="login">
      <AuthHeading main="Welcome to GameSpace" sub="Sign up" />
      <SignupContainer />
    </AuthContainer>
  );
}

export default SingupComponent;
