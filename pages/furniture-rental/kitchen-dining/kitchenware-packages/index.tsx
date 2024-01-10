import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";

import Product from "models/Product.model";
import { BlogCard2 } from "components/blog-cards";

import Section9 from "pages-sections/fashion-shop-1/Section9";

// styled component
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
}));

// ===============================================================
type ProductDetailsProps = {
  product: Product;
  relatedProducts: Product[];
  frequentlyBought: Product[];
};
// ===============================================================


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
  
const KitchenwarePackage = () => {


  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (_, value: number) => setSelectedOption(value);

  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <ShopLayout1>
      <Box sx={{ my: 4, mx:1 }}>
      <Section9 products={articles} />



      </Box>
    </ShopLayout1>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await api.getSlugs();

//   return {
//     paths: paths, //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };



export default KitchenwarePackage;
