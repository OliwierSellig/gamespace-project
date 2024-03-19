import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UserBoxLayout from "../userBoxLayout/userBoxLayout";
import styles from "./userSearchInput.module.scss";
import { IoClose } from "react-icons/io5";
import { setPage } from "../../../../utils/functions/functions";

type UserSearchInputProps = {
  inputValue: string;
  handleChange: (e: string) => void;
  placeholder?: string;
  resetPage?: boolean;
};

function UserSearchInput({
  inputValue,
  handleChange,
  placeholder = "",
  resetPage = true,
}: UserSearchInputProps) {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  return (
    <UserBoxLayout>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          onChange={(e) => {
            handleChange(e.target.value);
            if (resetPage) setPage(router, pathname, params, 1, 1);
          }}
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
