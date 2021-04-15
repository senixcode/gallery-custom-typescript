import { FC } from "react";
export interface IPropsImageCustom {
  url: string;
  alt: string;
}
export const ImagesCustom: FC<IPropsImageCustom> = ({ url, alt }) => (
  <section className="item bg_red">
    <img src={url} className="img_custom" alt={alt} />
  </section>
);
