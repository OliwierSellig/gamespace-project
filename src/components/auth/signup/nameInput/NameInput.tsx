import { Field } from "formik";
import FormInput from "../../../global/formInput/FormInput";
import RandomUserName from "../randomUserName/RandomUserName";
import styles from "./nameInput.module.scss";

type NameInputProps = {
  setName: (name: string) => void;
};

function NameInput({ setName }: NameInputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="">
        Now, create your GameSpace name!
      </label>
      <Field
        name="gamespaceName"
        component={FormInput}
        placeholder="GameSpace Name"
      />
      <RandomUserName setName={setName} />
    </div>
  );
}

export default NameInput;
