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



  const object = [
    {
      china_code: 'SF-002',
      color: 'Nâu',
      dimensions: ['1530', '1030', '650'],
      final_code: 'SF-002/SF-01/MB',
      final_name: 'Zeus sofa',
      historical_cost: 4520,
      id: 'a46a0f8e-fbf6-4ca4-9e72-041f35d27d03',
      image:['https://f.imgs.vietnamnet.vn/2017/12/06/14/3-loi-khuyen-thiet-ke-noi-that-nha-o-dep-mat-1.jpg','https://cdn.noithatxinh.vn/Images/Product/ban-ghe-an-dep-ba2111-3JC21r.jpg'],
      kloudek_code: 'SF-01',
      material: 'Vair',
      name: 'Zeus',
      note: '',
      rental_price: 10283000,
      seat: '4',
      selling_price: 61698000,
      specification: ['Vải: vải viên thịt cừu xuất khẩu, Gỗ thông nhập xuất từ Nga, chất liệu bảo 4 mặt, dây kéo, dây kéo YKK nhập khẩu từ Nhật Bản, 38 lò xo thép carbon cao mạ vàng', '']
    },
    {
      china_code: 'SF-002',
      color: 'Nâu',
      dimensions: ['1530', '1030', '650'],
      final_code: 'SF-002/SF-01/MB',
      final_name: 'Zeus sofa',
      historical_cost: 4520,
      id: 'a46a0f8e-fbf6-4ca4-9e72-041f35d27d03',
      image:['https://f.imgs.vietnamnet.vn/2017/12/06/14/3-loi-khuyen-thiet-ke-noi-that-nha-o-dep-mat-1.jpg','https://cdn.noithatxinh.vn/Images/Product/ban-ghe-an-dep-ba2111-3JC21r.jpg'],
      kloudek_code: 'SF-01',
      material: 'Vair',
      name: 'Zeus',
      note: '',
      rental_price: 10283000,
      seat: '4',
      selling_price: 61698000,
      specification: ['Vải: vải viên thịt cừu xuất khẩu, Gỗ thông nhập xuất từ Nga, chất liệu bảo 4 mặt, dây kéo, dây kéo YKK nhập khẩu từ Nhật Bản, 38 lò xo thép carbon cao mạ vàng', '']
    },
    {
      china_code: 'SF-002',
      color: 'Nâu',
      dimensions: ['1530', '1030', '650'],
      final_code: 'SF-002/SF-01/MB',
      final_name: 'Zeus sofa',
      historical_cost: 4520,
      id: 'a46a0f8e-fbf6-4ca4-9e72-041f35d27d03',
      image:['https://f.imgs.vietnamnet.vn/2017/12/06/14/3-loi-khuyen-thiet-ke-noi-that-nha-o-dep-mat-1.jpg','https://cdn.noithatxinh.vn/Images/Product/ban-ghe-an-dep-ba2111-3JC21r.jpg'],
      kloudek_code: 'SF-01',
      material: 'Vair',
      name: 'Zeus',
      note: '',
      rental_price: 10283000,
      seat: '4',
      selling_price: 61698000,
      specification: ['Vải: vải viên thịt cừu xuất khẩu, Gỗ thông nhập xuất từ Nga, chất liệu bảo 4 mặt, dây kéo, dây kéo YKK nhập khẩu từ Nhật Bản, 38 lò xo thép carbon cao mạ vàng', '']
    },
    {
      china_code: 'SF-002',
      color: 'Nâu',
      dimensions: ['1530', '1030', '650'],
      final_code: 'SF-002/SF-01/MB',
      final_name: 'Zeus sofa',
      historical_cost: 4520,
      id: 'a46a0f8e-fbf6-4ca4-9e72-041f35d27d03',
      image:['https://f.imgs.vietnamnet.vn/2017/12/06/14/3-loi-khuyen-thiet-ke-noi-that-nha-o-dep-mat-1.jpg','https://cdn.noithatxinh.vn/Images/Product/ban-ghe-an-dep-ba2111-3JC21r.jpg'],
      kloudek_code: 'SF-01',
      material: 'Vair',
      name: 'Zeus',
      note: '',
      rental_price: 10283000,
      seat: '4',
      selling_price: 61698000,
      specification: ['Vải: vải viên thịt cừu xuất khẩu, Gỗ thông nhập xuất từ Nga, chất liệu bảo 4 mặt, dây kéo, dây kéo YKK nhập khẩu từ Nhật Bản, 38 lò xo thép carbon cao mạ vàng', '']
    },
  ]

const AccentChairs = () => {


  const router = useRouter();

  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <ShopLayout1>
      <Box sx={{ my: 4, mx:1 }}>
      <Section9 products={object} />



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



export default AccentChairs;
