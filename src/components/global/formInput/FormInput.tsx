import { FieldProps } from "formik";
import styles from "./formInput.module.scss";

type FormInputProps = FieldProps & {
  placeholder?: string;
  type?: string;
};

function FormInput({
  field,
  form,
  placeholder = "",
  type = "text",
}: FormInputProps) {
  const errorCondition = Boolean(
    form.touched[field.name] && form.errors[field.name],
  );

  return (
    <div className={styles.container}>
      <input
        {...field}
        className={`${styles.input} ${errorCondition ? styles.input__error : ""}`}
        type={type}
        placeholder={placeholder}
      />
      {errorCondition && (
        <div className={styles.error}>{String(form.errors[field.name])}</div>
      )}
    </div>
  );
}

export default FormInput;
