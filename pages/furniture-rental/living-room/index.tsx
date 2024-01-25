import {  useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";

import Product from "models/Product.model";

import Section9LivingRoom from "pages-sections/fashion-shop-1/Section9LivingRoom";
import { useAppContext } from "contexts/AppContext";
import SEO from "components/SEO";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../src/firebase";
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
const LivingRoom = () => {
  const {state, dispatch} = useAppContext()
  const [sanpham, setSanpham] = useState(null)
  const router = useRouter();
  const [render, setRender] = useState(true)
  
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
        const renderTimeOut =  setTimeout(() => {
          setRender(!render)
        },1000)
        fetchData(); // Gọi hàm fetchData để thực hiện truy vấn dữ liệu khi component được mount
        return () => clearTimeout(renderTimeOut)
    }, []);
  return (
    <Box>
    {render ? <Box sx={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
     <img src="/assets/images/logorender.png"  alt="logo" />
     </Box> :
     <ShopLayout1>
      <SEO title="living room" description="livingroom"/>
      <Box sx={{ my: 4}}>
      <Section9LivingRoom products={sanpham} />
      </Box>
    </ShopLayout1>
    }
    </Box>
  );
};





export default LivingRoom;
