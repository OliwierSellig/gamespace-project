import * as yup from "yup";

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("This field is required")
    .min(5, "Minimum 5 characters")
    .max(30, "Maximum 30 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("This field is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^da-zA-Z]).{8,}$/,
      "Min 8 chars, incl. uppercase, number & symbol",
    )
    .required("This field is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("This field is required"),
  gamespaceName: yup
    .string()
    .required("This field is required")
    .min(3, "Minimum 3 characters")
    .max(25, "Maximum 25 characters"),
});
