import { Field } from "formik";
import FormInput from "../../../global/formInput/FormInput";
import RandomUserName from "../randomUserName/RandomUserName";
import styles from "./nameInput.module.scss";

type NameInputProps = {
  setFormValue: (
    value:
      | { type: "gamespaceName"; content: string }
      | { type: "avatar" | "background"; content: File },
  ) => void;
};

function NameInput({ setFormValue }: NameInputProps) {
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
      <RandomUserName
        setName={(name: string) =>
          setFormValue({ type: "gamespaceName", content: name })
        }
      />
    </div>
  );
}

export default NameInput;
