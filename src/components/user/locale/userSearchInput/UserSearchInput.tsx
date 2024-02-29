import UserBoxLayout from "../userBoxLayout/userBoxLayout";
import styles from "./userSearchInput.module.scss";
import { IoClose } from "react-icons/io5";

type UserSearchInputProps = {
  inputValue: string;
  handleChange: (e: string) => void;
  placeholder?: string;
};

function UserSearchInput({
  inputValue,
  handleChange,
  placeholder = "",
}: UserSearchInputProps) {
  return (
    <UserBoxLayout>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          value={inputValue}
        />
        <button
          className={styles.close}
          onClick={() => handleChange("")}
          aria-label="Empty Query"
        >
          <IoClose />
        </button>
      </div>
    </UserBoxLayout>
  );
}

export default UserSearchInput;
