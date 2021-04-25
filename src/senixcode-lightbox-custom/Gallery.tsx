import React, { FC } from "react";
import { ModalContext } from "./ModalContext";
import SwitchGalleryTypes from "./assets/SwitchGalleryTypes";
import { Item } from "./types";
import { ContainerGallery, Masonry } from "./Styles";

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
    <ContainerGallery>
      <Masonry>
        {items.map((item, index) => (
          <div key={index}>
            <SwitchGalleryTypes
              item={item}
              onClick={(e) => handleOnClik(e, item)}
              className="gallery_masonry__complet_space"
            />
          </div>
        ))}
      </Masonry>
    </ContainerGallery>
  );
};
