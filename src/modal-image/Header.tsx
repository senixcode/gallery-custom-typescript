import { FC, MouseEvent } from "react";
import {
  ZoomInIcon,
  ZoomOutIcon,
  DownloadIcon,
  CloseIcon,
  RotateIcon
} from "./icons";

export interface IPropsHeader {
  image: string;
  alt: string;
  zoomed: boolean;
  toggleZoom: (e: MouseEvent<HTMLImageElement, MouseEvent>) => void;
  toggleRotate: string;
  onClose: string;
  enableDownload: string;
  enableZoom: string;
  enableRotate: string;
}
const Header: FC<IPropsHeader> = (props) => (
  <div className="__react_modal_image__header">
    <span className="__react_modal_image__icon_menu">
      {props.enableDownload && (
        <a href={props.image} download>
          <DownloadIcon />
        </a>
      )}
      {props.enableZoom && (
        <a onClick={toggleZoom}>
          {props.zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
        </a>
      )}
      {props.enableRotate && (
        <a onClick={props.toggleRotate}>
          <RotateIcon />
        </a>
      )}
      <a onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
    {props.alt && (
      <span className="__react_modal_image__caption">{props.alt}</span>
    )}
  </div>
);
export default Header;
