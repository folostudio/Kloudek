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
import { StrictMode } from "react";
import api from "utils/__api__/fashion-shop";
import Service from "models/Service.model";
import Product from "models/Product.model";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../src/firebase";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "contexts/AppContext";


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
  const {state, dispatch} = useAppContext()
  const [sanpham, setSanpham] = useState(null);
  const [prsection2, setProsection2] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách sản phẩm từ Firestore
        const querySnapshot = await getDoc(doc(db, "rent_for_home", "living_room"));
        const productsection2 = await getDoc(doc(db, "rent_for_home", "bed_bath"));
        setProsection2(productsection2.data())
        // const querySnapshot = await getDocs(collection(db, "rent_for_home"));
        // Tạo mảng mới chứa dữ liệu sản phẩm
        // const newSanpham = [];
        // querySnapshot.forEach((doc) => {
        //   newSanpham.push(doc.data());
        // });
        // Cập nhật state sanpham
        // setSanpham(newSanpham);

      //  setSanpham(querySnapshot.data())
       dispatch({
        type2 : "ALL_PRODUCT",
        payload: querySnapshot.data()
      })
     setSanpham(querySnapshot.data())
      dispatch({
        type3: "RENDER",
        payload: true
      })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        fetchData(); // Gọi hàm fetchData để thực hiện truy vấn dữ liệu khi component được mount
    }, []);
    
  return (
 
     <ShopLayout1 showTopbar={false}>
      <SEO title="" description="Kloudek, kloudek, nội thất giá rẻ, bán nội thất, nội thất, cho thuê nội thất"/>
      <Box sx={{ backgroundColor: "#ffffff", overFlow: "hidden", mx:{md:2, xs:0} }}>
        {/* HERO SECTION AND SERCIVE CARDS */}
        <Section1 />
        {/* FLASH DEALS */}
        <Section6 products={sanpham?.sofas_sectionals} /> 
        <Section2 flashDeals={prsection2?.bedroom} />
        {/* NEW ARRIVALS */}
        <Section3  />
        {/* DEALS OF THE WEEK GRID CAROUSEL */}
        <Section9 brands={brandList} />
        <Section4 products={sanpham?.tables} />
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
