import AccountCta from "../../locale/accountCta/AccountCta";
import AuthContainer from "../../locale/authContainer/AuthContainer";
import AuthHeading from "../../locale/authHeading/AuthHeading";
import LoginForm from "../loginForm/LoginForm";

function LoginComponent() {
  return (
    <AuthContainer>
      <AuthHeading main="Welcome to Gamespace!" sub="Sign in" />
      {/* <LoginForm /> */}
      <AccountCta />
    </AuthContainer>
  );
}

export default LoginComponent;
