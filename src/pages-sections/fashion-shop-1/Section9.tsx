import { FC } from "react";
import { Box, Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3Kloudek from "components/product-cards/ProductCard3Kloudek";
import Product from "models/Product.model";

// =============================================================
type Props = { products: any[] };
// =============================================================
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
const Section9 = (props : any) => {
 
  
  const trendings = props?.products;
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item container md={12} xs={12} spacing={2}>
          {trendings?.map((item: any, index: any) => (
            <Grid item xs={12} sm={4} md={2.4} key={index}>
              <ProductCard3Kloudek
                china_code={item?.china_code}
                color={item?.color}
                dimensions={item?.dimensions}
                final_code={item?.final_code}
                final_name={item?.final_name}
                historical_cost={item?.historical_cost}
                id={item?.id}
                image={item?.image}
                kloudek_code={item?.kloudek_code}
                material={item?.material}
                name={item?.name}
                note={item?.note}
                rental_price={item?.rental_price}
                seat={item?.seat}
                selling_price={item?.selling_price}
                specification={item?.specification}
                slug={item?.name}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section9;
