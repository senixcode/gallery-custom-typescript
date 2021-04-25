import React, { FC } from "react";
import { ModalContext } from "./ModalContext";
import SwitchGalleryTypes from "./assets/SwitchGalleryTypes";
import { Item } from "./types";

interface PropsGallery {
  items: Array<Item>;
}

export const Gallery: FC<PropsGallery> = ({ items }) => {
  const { setShowModal } = React.useContext(ModalContext);
  const handleOnClik = (e: any, item: Item) => {
    (e.target as HTMLElement).classList.add("open");
    if (setShowModal)
      setShowModal({
        state: true,
        item,
        items
      });
  };
  if (!items)
    return <p>Requires an array of elements in the src/items is example</p>;

  return (
    <div className="container-gallery">
      <section className="grid">
        {items.map((item, index) => (
          <div className="content flow" key={index}>
            <SwitchGalleryTypes
              item={item}
              onClick={(e) => handleOnClik(e, item)}
              className="complet_item"
            />
          </div>
        ))}
      </section>
    </div>
  );
};
