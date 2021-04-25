import React from "react";
import { ModalContext } from "../ModalContext";
import { IShowModalState } from "../types";
interface IUseSlider {
  showModal: IShowModalState;
  plusSlides: (n: number) => void;
}

export default function useSlider(currentSlide: number): IUseSlider {
  const { showModal } = React.useContext(ModalContext);
  let slideIndex = 1;

  function showSlides(n: number): void {
    var slides = document.getElementsByClassName("slide");
    if (showModal.items.length > 0 && slides) {
      var i: number;
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }

      (slides[slideIndex - 1] as HTMLElement).style.display = "block";
    }
  }
  function plusSlides(n: number): void {
    if (showModal.items) showSlides((slideIndex += n));
  }
  function CurrentSlide(n: number): void {
    showSlides((slideIndex = n));
  }

  React.useEffect(() => {
    if (showModal.items) {
      showSlides(slideIndex);
    }
  });

  React.useEffect(() => {
    if (currentSlide) {
      CurrentSlide(currentSlide);
    }
  }, [currentSlide]);

  return { showModal, plusSlides };
}
