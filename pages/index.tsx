import { GetStaticProps, NextPage } from "next";
import SEO from "components/SEO";
import { Box } from "@mui/material";
import Setting from "components/Setting";
import Newsletter from "components/Newsletter";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Section1 from "pages-sections/fashion-shop-1/Section1";
// import Section2 from "pages-sections/fashion-shop-1/Section2";
import Section2 from "pages-sections/market-1/Section2";

import Section3 from "pages-sections/fashion-shop-1/Section3";
import Section4 from "pages-sections/fashion-shop-1/Section4";
import Section5 from "pages-sections/fashion-shop-1/Section5";
import Section6 from "pages-sections/fashion-shop-1/Section6";
import Section7 from "pages-sections/fashion-shop-1/Section7";
import Section8 from "pages-sections/fashion-shop-1/Section8";
import Section9 from "pages-sections/fashion-shop-2/Section9";

import api from "utils/__api__/fashion-shop";
import Service from "models/Service.model";
import Product from "models/Product.model";
const articles = [
  {
    id: "20a83049-bc4b-41cc-9a29-0b2b69a7fd08",
    title: "30% Off Coupon for Black Friday",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-1.jpg",
    shop: {
      id: "e7c5030b-0504-4b4c-81dc-1627302bc1a4",
      slug: "scarlett-beauty",
      user: {
        id: "642f50d7-944b-459e-aa20-154afdccb413",
        email: "Annette_Gleason@yahoo.com",
        phone: "(607) 973-2857 x445",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        password: "C_mhvNPAeAU7Mj4",
        dateOfBirth: "1963-06-10T22:22:55.842Z",
        verified: true,
        name: {
          firstName: "Rosa",
          lastName: "Pagac",
        },
      },
      email: "Isabella.Kris13@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    user: {
      id: "642f50d7-944b-459e-aa20-154afdccb413",
      email: "Annette_Gleason@yahoo.com",
      phone: "(607) 973-2857 x445",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      password: "C_mhvNPAeAU7Mj4",
      dateOfBirth: "1963-06-10T22:22:55.842Z",
      verified: true,
      name: {
        firstName: "Rosa",
        lastName: "Pagac",
      },
    },
    createdAt: "21 SEP",
    slug: "30percent-off-coupon-for-black-friday",
  },
  {
    id: "108015ad-897b-4c90-a90f-53b288ad162c",
    title: "10% Discount for Cosmatics",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-2.jpg",
    shop: {
      id: "d32b469e-4ccc-43b4-8427-98eba478355f",
      slug: "scroll-through",
      user: {
        id: "992c82b5-8a64-47a3-b665-2b59b6f950e6",
        email: "Enid99@yahoo.com",
        phone: "(672) 865-8949",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg",
        password: "ZlNtd6J9UV37Enm",
        dateOfBirth: "1951-03-01T08:56:59.687Z",
        verified: true,
        name: {
          firstName: "Oren",
          lastName: "Pagac",
        },
      },
      email: "Cheyanne.Kutch56@gmail.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    user: {
      id: "bd8b4e8b-6794-42f3-a42f-a2abd903ced9",
      email: "Alexa.Dickens65@yahoo.com",
      phone: "1-904-617-0268 x6023",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/965.jpg",
      password: "PxqJTybdKi_Qrcb",
      dateOfBirth: "1959-12-13T23:47:11.023Z",
      verified: true,
      name: {
        firstName: "Jamar",
        lastName: "Kuhn",
      },
    },
    createdAt: "21 SEP",
    slug: "10percent-discount-for-cosmatics",
  },
  {
    id: "f3f920ba-3f3e-47cd-a109-9183a15479fa",
    title: " Buy 2 get 1 free Offer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-3.jpg",
    shop: {
      id: "e7c5030b-0504-4b4c-81dc-1627302bc1a4",
      slug: "scarlett-beauty",
      user: {
        id: "642f50d7-944b-459e-aa20-154afdccb413",
        email: "Annette_Gleason@yahoo.com",
        phone: "(607) 973-2857 x445",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        password: "C_mhvNPAeAU7Mj4",
        dateOfBirth: "1963-06-10T22:22:55.842Z",
        verified: true,
        name: {
          firstName: "Rosa",
          lastName: "Pagac",
        },
      },
      email: "Isabella.Kris13@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    user: {
      id: "642f50d7-944b-459e-aa20-154afdccb413",
      email: "Annette_Gleason@yahoo.com",
      phone: "(607) 973-2857 x445",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      password: "C_mhvNPAeAU7Mj4",
      dateOfBirth: "1963-06-10T22:22:55.842Z",
      verified: true,
      name: {
        firstName: "Rosa",
        lastName: "Pagac",
      },
    },
    createdAt: "21 SEP",
    slug: "buy-2-get-1-free-offer",
  },
  {
    id: "f3f920ba-3f3e-47cd-a109-9183a15479fa",
    title: " Buy 2 get 1 free Offer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-3.jpg",
    shop: {
      id: "e7c5030b-0504-4b4c-81dc-1627302bc1a4",
      slug: "scarlett-beauty",
      user: {
        id: "642f50d7-944b-459e-aa20-154afdccb413",
        email: "Annette_Gleason@yahoo.com",
        phone: "(607) 973-2857 x445",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        password: "C_mhvNPAeAU7Mj4",
        dateOfBirth: "1963-06-10T22:22:55.842Z",
        verified: true,
        name: {
          firstName: "Rosa",
          lastName: "Pagac",
        },
      },
      email: "Isabella.Kris13@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    user: {
      id: "642f50d7-944b-459e-aa20-154afdccb413",
      email: "Annette_Gleason@yahoo.com",
      phone: "(607) 973-2857 x445",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      password: "C_mhvNPAeAU7Mj4",
      dateOfBirth: "1963-06-10T22:22:55.842Z",
      verified: true,
      name: {
        firstName: "Rosa",
        lastName: "Pagac",
      },
    },
    createdAt: "21 SEP",
    slug: "buy-2-get-1-free-offer",
  },
  {
    id: "f3f920ba-3f3e-47cd-a109-9183a15479fa",
    title: " Buy 2 get 1 free Offer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-3.jpg",
    shop: {
      id: "e7c5030b-0504-4b4c-81dc-1627302bc1a4",
      slug: "scarlett-beauty",
      user: {
        id: "642f50d7-944b-459e-aa20-154afdccb413",
        email: "Annette_Gleason@yahoo.com",
        phone: "(607) 973-2857 x445",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        password: "C_mhvNPAeAU7Mj4",
        dateOfBirth: "1963-06-10T22:22:55.842Z",
        verified: true,
        name: {
          firstName: "Rosa",
          lastName: "Pagac",
        },
      },
      email: "Isabella.Kris13@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    user: {
      id: "642f50d7-944b-459e-aa20-154afdccb413",
      email: "Annette_Gleason@yahoo.com",
      phone: "(607) 973-2857 x445",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      password: "C_mhvNPAeAU7Mj4",
      dateOfBirth: "1963-06-10T22:22:55.842Z",
      verified: true,
      name: {
        firstName: "Rosa",
        lastName: "Pagac",
      },
    },
    createdAt: "21 SEP",
    slug: "buy-2-get-1-free-offer",
  },
  {
    id: "f3f920ba-3f3e-47cd-a109-9183a15479fa",
    title: " Buy 2 get 1 free Offer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-3.jpg",
    shop: {
      id: "e7c5030b-0504-4b4c-81dc-1627302bc1a4",
      slug: "scarlett-beauty",
      user: {
        id: "642f50d7-944b-459e-aa20-154afdccb413",
        email: "Annette_Gleason@yahoo.com",
        phone: "(607) 973-2857 x445",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        password: "C_mhvNPAeAU7Mj4",
        dateOfBirth: "1963-06-10T22:22:55.842Z",
        verified: true,
        name: {
          firstName: "Rosa",
          lastName: "Pagac",
        },
      },
      email: "Isabella.Kris13@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    user: {
      id: "642f50d7-944b-459e-aa20-154afdccb413",
      email: "Annette_Gleason@yahoo.com",
      phone: "(607) 973-2857 x445",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      password: "C_mhvNPAeAU7Mj4",
      dateOfBirth: "1963-06-10T22:22:55.842Z",
      verified: true,
      name: {
        firstName: "Rosa",
        lastName: "Pagac",
      },
    },
    createdAt: "21 SEP",
    slug: "buy-2-get-1-free-offer",
  },
];

const brandList = [
  {
    id: "9aee1898-23e0-4965-8f0d-427dc963ae07",
    slug: "",
    name: "",
    image: "/assets/images/brands/acer.png",
    type: "",
  },
  {
    id: "024ec2a2-7ca7-46c2-8990-f78ac4215dd1",
    slug: "",
    name: "",
    image: "/assets/images/brands/alibaba.png",
    type: "",
  },
  {
    id: "e370f16a-90e2-4f26-b9af-a38d6f645a4c",
    slug: "",
    name: "",
    image: "/assets/images/brands/amazon.png",
    type: "",
  },
  {
    id: "d8f4c60e-6bac-4fdc-9880-999fbddac97d",
    slug: "",
    name: "",
    image: "/assets/images/brands/bmw.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/ebay.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/ferrari.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/levis.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/lotto.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/samsung.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/titan.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/tesla.png",
    type: "",
  },
  {
    id: "0c74cb7c-6082-4640-9380-815928be7127",
    slug: "",
    name: "",
    image: "/assets/images/brands/raymond.png",
    type: "",
  },
];
// =======================================================
type FashionShop1Props = {
  hotDealList: any[];
  dealOfTheWeek: any[];
  serviceList: Service[];
  trendingItems: Product[];
  flashDealsData: Product[];
  newArrivalsData: Product[];
};
// =======================================================

const FashionShop1: NextPage<FashionShop1Props> = (props) => {
  return (
    <ShopLayout1 showTopbar={false}>
      <SEO title="" description="Kloudek, kloudek, nội thất giá rẻ, bán nội thất, nội thất, cho thuê nội thất"/>
      <Box sx={{ backgroundColor: "#ffffff", overFlow: "hidden", mx:{md:2, xs:0} }}>
        {/* HERO SECTION AND SERCIVE CARDS */}
        <Section1 />
      
        {/* FLASH DEALS */}
        <Section6 products={props.trendingItems} />
        <Section2 flashDeals={props.flashDealsData} />
     

        {/* NEW ARRIVALS */}
        <Section3  />

        {/* DEALS OF THE WEEK GRID CAROUSEL */}
        <Section9 brands={brandList} />
        <Section4 blogs={articles} />

        {/* HOT DEALS CAROUSEL */}
        {/* <Section5 hotDealList={props.hotDealList} /> */}

        {/* TRENDING ITEMS */}
        

        {/* SERVICE ITEMS */}
        {/* <Section7 serviceList={props.serviceList} /> */}

        {/* SUBSCRIBE NEWSLETTER */}
        {/* <Section8 /> */}

        {/* POPUP NEWSLETTER FORM */}
        {/* <Newsletter /> */}

        {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
        {/* <Setting /> */}
      </Box>
    </ShopLayout1>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hotDealList = await api.getHotDealList();
  const serviceList = await api.getServiceList();
  const flashDealsData = await api.getFlashDeals();
  const trendingItems = await api.getTrendingItems();
  const newArrivalsData = await api.getNewArrivals();
  const dealOfTheWeek = await api.getDealOfTheWeekList();

  return {
    props: {
      hotDealList,
      serviceList,
      dealOfTheWeek,
      trendingItems,
      flashDealsData,
      newArrivalsData,
    },
  };
};

export default FashionShop1;