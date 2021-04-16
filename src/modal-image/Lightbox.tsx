import React, { FC, useCallback, useEffect, useState } from "react";
interface IMove {
  x: number;
  y: number;
}
interface IPropsLightbox {
  onClose: () => void;
}
const Lightbox: FC<IPropsLightbox> = ({ onClose }) => {
  const [move, setMove] = useState<IMove>({ x: 0, y: 0 });
  const [moveStart, setMoveStart] = useState();
  const [zoomed, setZoomed] = useState<boolean>(false);
  const [rotationDeg, setRotationDeg] = useState<number>(0);

  /*
  How to register event with useEffect hooks?
  https://stackoverflow.com/a/55566585
*/

  const handleKeyDown = useCallback((event) => {
    const { keyCode } = event;
    // keyCode https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    const KeyCodeEscape: number = 27;
    const KeyCodeEnter: number = 13;
    const validateTypeKey = (type) => keyCode === type;
    if (validateTypeKey(KeyCodeEscape) || validateTypeKey(KeyCodeEnter)) {
      onClose();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, false);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  const getCoordinatesIfOverImg = useCallback((event) => {
    const point = event.changedTouches ? event.changedTouches[0] : event;
    if (point.target.id !== "react-modal-image-img") {
      // the img was not a target of the coordinates
      return;
    }

    const dim = window.contentEl.getBoundingClientRect();
    const x = point.clientX - dim.left;
    const y = point.clientY - dim.top;

    return { x, y };
  }, []);

  const handleMouseDownOrTouchStart = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {};
  return <div onMouseDown={handleMouseDownOrTouchStart} />;
};
export default Lightbox;
