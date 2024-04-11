import AuthContainer from "../../locale/authContainer/AuthContainer";
import AuthHeading from "../../locale/authHeading/AuthHeading";
import LoginForm from "../loginForm/LoginForm";

function LoginComponent() {
  return (
    <AuthContainer ctaType="register">
      <AuthHeading main="Welcome to Gamespace!" sub="Sign in" />
      <LoginForm />
    </AuthContainer>
  );
}

export default LoginComponent;
