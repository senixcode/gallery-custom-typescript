import { FC, Fragment } from "react";
import SwitchGalleryTypes from "./assets/SwitchGalleryTypes";
import useSlider from "./hooks/useSlider";

interface PropsSlider {
  currentSlide: number;
}
const Slider: FC<PropsSlider> = ({ currentSlide }) => {
  const { showModal, plusSlides } = useSlider(currentSlide);
  if (!showModal.items) return <p>Error slider</p>;

  const ButtonsSlider: FC<{ plusSlides: (n: number) => void }> = ({
    plusSlides
  }) => (
    <Fragment>
      <span className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </span>
      <span className="next" onClick={() => plusSlides(1)}>
        ❯
      </span>
    </Fragment>
  );

  return (
    <div className="container-slide full-item">
      {showModal.items?.length > 0 &&
        showModal.items.map((item, index) => (
          <div key={item.src} className="slide">
            <div className="numbertext">{`${index + 1} / ${
              showModal.items?.length
            }`}</div>
            <SwitchGalleryTypes item={item} />
          </div>
        ))}
      <ButtonsSlider plusSlides={plusSlides} />
    </div>
  );
};
export default Slider;
