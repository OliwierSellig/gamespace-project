import AuthContainer from "../../locale/authContainer/AuthContainer";
import AuthHeading from "../../locale/authHeading/AuthHeading";
import PasswordRecoveryForm from "../passwordRecoveryForm/PasswordRecoveryForm";

function PasswordRecoveryComponent() {
  return (
    <AuthContainer ctaType="login">
      <AuthHeading main="Welcome to Gamespace!" sub="Reset your password" />
      <PasswordRecoveryForm />
    </AuthContainer>
  );
}

export default PasswordRecoveryComponent;
