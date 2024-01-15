import { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";

import Product from "models/Product.model";


import Section9 from "pages-sections/fashion-shop-1/Section9";
import { useAppContext } from "contexts/AppContext";
import SEO from "components/SEO";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../src/firebase";
// styled component


// ===============================================================

// ===============================================================
const Chairs = () => {
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
        // const querySnapshot = await getDocs(collection(db, "rent_for_home"));

        // Tạo mảng mới chứa dữ liệu sản phẩm
        // const newSanpham = [];
        // querySnapshot.forEach((doc) => {Z
        //   newSanpham.push(doc.data());
        // });
        // Cập nhật state sanpham
        // setSanpham(newSanpham);
        // console.log(querySnapshot.data());
      //  setSanpham(querySnapshot.data())
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
      <SEO title="Chairs" description="chairs"/>
      <Box sx={{ my: 4, mx:1 }}>
      <Section9 products={sanpham?.chairs} />
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



export default Chairs;
