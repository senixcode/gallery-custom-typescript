import React, { FC, useState } from "react";
import { SpinnerIcon } from "./icons";
export interface IPropsImage {
  id: string;
  className: string;
  src: string;
  style: React.CSSProperties;
  handleDoubleClick: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
  contextMenu: boolean;
}
const Image: FC<IPropsImage> = ({
  contextMenu,
  id,
  className,
  src,
  style,
  handleDoubleClick
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const handleOnLoad = () => {
    setLoading(false);
  };

  const handleOnContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ): void => {
    if (!contextMenu) event.preventDefault();
  };
  return (
    <div>
      {loading && <SpinnerIcon />}
      <img
        id={id}
        className={className}
        src={src}
        style={style}
        onLoad={handleOnLoad}
        onDoubleClick={handleDoubleClick}
        onContextMenu={handleOnContextMenu}
        alt="test"
      />
    </div>
  );
};
export default Image;
