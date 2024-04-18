import SwiperComponent from "../../../../../global/swiperComponent/SwiperComponent";
import ChangeAvatarContainer from "../../avatar/changeAvatarContainer/ChangeAvatarContainer";
import UpdateBackgroundContainer from "../../background/updateBackgroundContainer/UpdateBackgroundContainer";
import UpdateNameContainer from "../../name/updateNameContainer/UpdateNameContainer";

const items = [
  ChangeAvatarContainer,
  UpdateNameContainer,
  UpdateBackgroundContainer,
];

type ChangeSettingSwiperProps = {
  currentSlide: number;
  setSlide: (num: number) => void;
};

function ChangeSettingsSwiper({
  currentSlide,
  setSlide,
}: ChangeSettingSwiperProps) {
  return (
    <SwiperComponent
      props={{ default: { slidesPerView: 1, spaceBetween: 0 } }}
      setExtSlide={(num) => setSlide(num)}
      externalSlide={currentSlide}
    >
      {items.map((Item, i) => (
        <Item key={i} />
      ))}
    </SwiperComponent>
  );
}

export default ChangeSettingsSwiper;
