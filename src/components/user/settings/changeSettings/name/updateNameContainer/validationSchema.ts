import * as yup from "yup";

export const validationSchema = yup.object().shape({
  newName: yup
    .string()
    .min(3, "Minimum 3 characters")
    .max(25, "Maximum 25 characters"),
});
