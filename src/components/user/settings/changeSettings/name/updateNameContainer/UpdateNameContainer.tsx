import { Field, FormikProvider, useFormik } from "formik";
import FormInput from "../../../../../global/formInput/FormInput";
import ChangeSettingsSwiperItem from "../../layout/changeSettingsSwiperItem/ChangeSettingsSwiperItem";
import GenerateNewName from "../generateNewName/GenerateNewName";
import styles from "./updateNameContainer.module.scss";
import { validationSchema } from "./validationSchema";

type initialValues = {
  newName: string;
};

function UpdateNameContainer() {
  const formik = useFormik<initialValues>({
    initialValues: {
      newName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function setNewName(name: string) {
    formik.setFieldValue("newName", name);
  }

  return (
    <FormikProvider value={formik}>
      <ChangeSettingsSwiperItem>
        <div className={styles.container}>
          <Field name="newName" component={FormInput} placeholder="New Name" />
          <GenerateNewName setName={setNewName} />
        </div>
      </ChangeSettingsSwiperItem>
    </FormikProvider>
  );
}

export default UpdateNameContainer;
