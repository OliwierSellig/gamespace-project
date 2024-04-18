import { FieldProps } from "formik";

function FileInput({ field }: FieldProps) {
  return <input {...field} type="file" />;
}

export default FileInput;
