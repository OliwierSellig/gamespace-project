import * as yup from "yup";

export const validationSchema = yup.object().shape({
  username: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
  passwordConfirm: yup.string().required("This field is required"),
});
