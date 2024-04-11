import { FieldProps } from "formik";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import styles from "./passwordInput.module.scss";

type PasswordInputProps = FieldProps & {
  placeholder?: string;
};

function PasswordInput({ field, form, placeholder = "" }: PasswordInputProps) {
  const errorCondition = Boolean(
    form.touched[field.name] && form.errors[field.name],
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <input
        {...field}
        className={`${styles.input} ${errorCondition ? styles.input__error : ""}`}
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
      />
      {errorCondition && (
        <div className={styles.error}>{String(form.errors[field.name])}</div>
      )}
      <button onClick={togglePasswordVisibility} className={styles.btn}>
        {isPasswordVisible ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
      </button>
    </div>
  );
}

export default PasswordInput;
