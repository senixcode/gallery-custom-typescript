import { useRef } from "react";
import { CustomGallery, Item, DefaultLayout } from "react-photoswipe-gallery";

const MyGallery = () => {
  const layoutRef = useRef();

  return (
    <video controls>
      <source src="https://res.cloudinary.com/ds5ayigjw/video/upload/v1617926559/my-website/2021-04-05_23-07-04_jklscb.mp4" />
    </video>
  );
};
export default MyGallery;
