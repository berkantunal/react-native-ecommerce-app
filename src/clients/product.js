import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const simple = {
  id: 27,
  categoryId: 27,
  cover: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
  images: [
    {
      source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350"
    },
    {
      source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350"
    },
    {
      source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350"
    }
  ],
  title: "Ürün 1",
  brand: 1,
  shortDescription: "Ürün Kısa Açıklama",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet semper tortor, commodo tincidunt enim scelerisque ut. Sed in augue sem. Vestibulum facilisis iaculis tortor quis pulvinar. Etiam nisl purus, fermentum quis bibendum sed, blandit ut mauris. Vestibulum eget lobortis tortor. Maecenas volutpat viverra massa eu pulvinar. Ut blandit risus ullamcorper, rhoncus odio quis, ullamcorper quam. Vestibulum lacinia viverra ligula, ut mollis lectus congue eu. Integer eros erat, euismod eget mi eu, vulputate luctus arcu. Maecenas erat velit, tristique id euismod ut, aliquam nec ante. Ut a orci scelerisque metus bibendum pellentesque at aliquet est. Donec vel commodo dolor. Phasellus consectetur lacus sit amet pharetra dignissim.",
  properties: [
    {
      title: "Ön (Selfie) Kamera",
      value: "16 MP"
    },
    {
      title: "Dahili Hafıza",
      value: "64 GB"
    },
    {
      title: "RAM Kapasitesi",
      value: "4 GB RAM"
    },
    {
      title: "RAM Kapasitesi",
      value: "4 GB RAM"
    },
    {
      title: "Pil Gücü",
      value: "3000 mAh"
    },
    {
      title: "Ön (Selfie) Kamera",
      value: "16 MP"
    }
  ],
  percentage: 30,
  price: 15,
  oldPrice: 25,
  freeShipping: true
};

export default [
  {
    ...simple
  },
  {
    ...simple
  },
  {
    ...simple
  },
  {
    ...simple
  }
]
