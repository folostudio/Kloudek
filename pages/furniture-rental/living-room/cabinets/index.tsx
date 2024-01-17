import {  useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";

import Product from "models/Product.model";

import Section9 from "pages-sections/fashion-shop-1/Section9";
import { useAppContext } from "contexts/AppContext";
import SEO from "components/SEO";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../src/firebase";


// ===============================================================
type ProductDetailsProps = {
  product: Product;
  relatedProducts: Product[];
  frequentlyBought: Product[];
};
// ===============================================================
const Cabinets = () => {
  const {state, dispatch} = useAppContext()
  const [sanpham, setSanpham] = useState(null)
  const router = useRouter();

  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách sản phẩm từ Firestore
        const querySnapshot = await getDoc(doc(db, "rent_for_home", "living_room"));
       dispatch({
        type2 : "ALL_PRODUCT",
        payload: querySnapshot.data()
      })
      setSanpham(querySnapshot.data())
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        fetchData(); // Gọi hàm fetchData để thực hiện truy vấn dữ liệu khi component được mount
    }, []);
  return (
    <ShopLayout1>
      <SEO title="cabinets" description="cabinets"/>
      <Box sx={{ my: 4}}>
      <Section9 products={sanpham?.cabinets} />
      </Box>
    </ShopLayout1>
  );
};





export default Cabinets;
