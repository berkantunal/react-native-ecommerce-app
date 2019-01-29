import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const product = {
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
    type: "slider",
    height: 350,
    images: [
      {
        title: "Page 1",
        source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
        category_id: 1
      },
      {
        title: "Page 2",
        source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
        category_id: 1
      },
      {
        title: "Page 3",
        source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
        category_id: 1
      }
    ]
  },
  {
    type: "tabs",
    categories: [
      {
        id: 25,
        title: "Kategori 1",
        products: [
          {
            ...product
          },
          {
            ...product
          },
          {
            ...product
          }
        ]
      },
      {
        id: 26,
        title: "Kategori 2",
        products: [
          {
            ...product
          },
          {
            ...product
          },
          {
            ...product
          }
        ]
      },
      {
        id: 27,
        title: "Kategori 3",
        products: [
          {
            ...product
          },
          {
            ...product
          },
          {
            ...product
          }
        ]
      }
    ]
  },
  {
    type: "banner_content",
    marginTop: 25,
    components: [
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x150.png?text=" + width + "x150",
        category_id: 1,
        height: 150,
        col: 1
      }
    ]
  },
  {
    type: "banner_content",
    components: [
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x150.png?text=" + width + "x150",
        category_id: 1,
        height: 150,
        col: 2
      },
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x150.png?text=" + width + "x150",
        category_id: 1,
        height: 150,
        col: 2
      }
    ]
  },
  {
    type: "product_slider",
    title: "En İyi Ürünler",
    products: [
      {
        ...product
      },
      {
        ...product
      },
      {
        ...product
      }
    ]
  },
  {
    type: "banner_content",
    components: [
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x250.png?text=" + width + "x250",
        category_id: 1,
        height: 250,
        col: 1
      }
    ]
  },
  {
    type: "category_banner",
    categories: [
      {
        id: 25,
        title: "Kategori 1",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      },
      {
        id: 26,
        title: "Kategori 1",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      },
      {
        id: 27,
        title: "Kategori 1",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      },
      {
        id: 28,
        title: "Kategori 1",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      }
    ],
    col: 2,
    height: 150
  },
  {
    type: "product_scroll",
    title: "En İyi Ürünler",
    products: [
      {
        ...product
      },
      {
        ...product
      },
      {
        ...product
      }
    ]
  }
]
