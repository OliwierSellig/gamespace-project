import { Field } from "formik";
import FormInput from "../../../../../global/formInput/FormInput";
import ChangeSettingsSwiperItem from "../../layout/changeSettingsSwiperItem/ChangeSettingsSwiperItem";
import GenerateNewName from "../generateNewName/GenerateNewName";
import styles from "./updateNameContainer.module.scss";

function UpdateNameContainer() {
  return (
    <ChangeSettingsSwiperItem>
      <div className={styles.container}>
        <Field name="newName" component={FormInput} placeholder="New Name" />
        <GenerateNewName />
      </div>
    </ChangeSettingsSwiperItem>
  );
}

export default UpdateNameContainer;
