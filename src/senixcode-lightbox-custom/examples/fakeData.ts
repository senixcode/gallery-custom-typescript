import { Item, TypeItem } from "../types";
export const image = {
  normal:
    "https://res.cloudinary.com/ds5ayigjw/image/upload/v1618081385/web-site_kc5dsf.png",
  medium:
    "https://res.cloudinary.com/ds5ayigjw/image/upload/v1619108922/my-website/project-size-mobile_bb6lvz.png",
  large:
    "https://res.cloudinary.com/ds5ayigjw/image/upload/v1619117623/my-website/detail-project-mobile_azllve.jpg"
};
const video = {
  normal:
    "https://res.cloudinary.com/ds5ayigjw/video/upload/v1617926559/my-website/2021-04-05_23-07-04_jklscb.mp4"
};

export const dataExample1: Array<Item> = [
  {
    src: video.normal,
    type: TypeItem.VIDEO
  },
  {
    src: image.normal,
    type: TypeItem.IMAGE
  },
  {
    src: image.medium,
    type: TypeItem.IMAGE
  },
  {
    src: image.large,
    type: TypeItem.IMAGE
  }
];

export const dataExample2: Array<Item> = [
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg",
    type: TypeItem.IMAGE
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/2.jpg",
    type: TypeItem.IMAGE
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/3.jpg",
    type: TypeItem.IMAGE
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/4.jpg",
    type: TypeItem.IMAGE
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/6.jpg",
    type: TypeItem.IMAGE
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/8.jpg",
    type: TypeItem.IMAGE
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/9.jpg",
    type: TypeItem.IMAGE
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/7.jpg",
    type: TypeItem.IMAGE
  }
];
