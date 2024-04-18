import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
});
