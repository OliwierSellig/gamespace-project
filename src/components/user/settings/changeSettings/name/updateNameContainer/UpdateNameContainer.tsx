import { Field, FormikProvider, useFormik } from "formik";
import { validationSchema } from "../../../../../auth/signup/signupContainer/validationSchema";
import FormInput from "../../../../../global/formInput/FormInput";
import ChangeSettingsSwiperItem from "../../layout/changeSettingsSwiperItem/ChangeSettingsSwiperItem";
import GenerateNewName from "../generateNewName/GenerateNewName";
import styles from "./updateNameContainer.module.scss";

type initialValues = {
  gamespaceName: string;
};

function UpdateNameContainer() {
  const formik = useFormik<initialValues>({
    initialValues: {
      gamespaceName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function setGameSpaceName(name: string) {
    formik.setFieldValue("gamespaceName", name);
  }

  return (
    <FormikProvider value={formik}>
      <ChangeSettingsSwiperItem>
        <div className={styles.container}>
          <Field
            name="gamespaceName"
            component={FormInput}
            placeholder="New Name"
          />
          <GenerateNewName setName={setGameSpaceName} />
        </div>
      </ChangeSettingsSwiperItem>
    </FormikProvider>
  );
}

export default UpdateNameContainer;
