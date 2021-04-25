import { Fragment } from "react";
import useModal from "./hooks/useModal";
import Slider from "./Slider";
const Modal = () => {
  const { modalRef, closeModal, currentSlide } = useModal();
  const IconsModal = () => (
    <Fragment>
      <span className="close">
        <i className="fas fa-times" onClick={closeModal}></i>
      </span>
      {/* <span className="zoomIcon">
        <i className="fas fa-search-plus"></i>
      </span> */}
    </Fragment>
  );
  return (
    <div className="modal" ref={modalRef}>
      <IconsModal />
      <Slider currentSlide={currentSlide} />
      {/* <p className="caption">Test caption</p> */}
    </div>
  );
};
export default Modal;
