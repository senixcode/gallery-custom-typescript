import { GridCallery } from "../components/GridGallery";
import { IPropsImageCustom } from "../components/molecules/ImagesCustom";
//generate images test https://dummyimage.com/
const imageDark = "https://dummyimage.com/1317x655/f5e7f5/1f191f.png";
const imageWhite = "https://dummyimage.com/1317x655/000/fff.png";
const imagesItems: Array<IPropsImageCustom> = [
  {
    url: imageDark,
    alt: "dummyimage 1"
  },
  {
    url: imageWhite,
    alt: "dummyimage 1"
  },
  {
    url: imageDark,
    alt: "dummyimage 1"
  },
  {
    url: imageWhite,
    alt: "dummyimage 1"
  }
];
export default function TestGridMe() {
  return (
    <>
      <h1>Example gallery grid</h1>
      <GridCallery items={imagesItems} />
    </>
  );
}
