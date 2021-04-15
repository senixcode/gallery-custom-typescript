import { FC } from "react";
import { ImagesCustom, IPropsImageCustom } from "./molecules/ImagesCustom";

export interface IPropsGridGallery {
  items: Array<IPropsImageCustom>;
}
export const GridCallery: FC<IPropsGridGallery> = ({ items }) => (
  <div className="container">
    {items.map((item, index) => (
      <ImagesCustom key={index} {...item} />
    ))}
  </div>
);
