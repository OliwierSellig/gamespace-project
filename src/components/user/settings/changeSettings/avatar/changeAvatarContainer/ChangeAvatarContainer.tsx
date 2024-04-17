import ChangeSettingsSwiperItem from "../../layout/changeSettingsSwiperItem/ChangeSettingsSwiperItem";
import PreviousAvatars from "../previousAvatars/PreviousAvatars";
import UploadAvatar from "../uploadAvatar/UploadAvatar";

function ChangeAvatarContainer() {
  return (
    <ChangeSettingsSwiperItem>
      <UploadAvatar />
      <PreviousAvatars />
    </ChangeSettingsSwiperItem>
  );
}

export default ChangeAvatarContainer;
