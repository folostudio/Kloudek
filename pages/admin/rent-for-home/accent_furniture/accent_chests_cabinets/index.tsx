import Router from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import Scrollbar from "components/Scrollbar";
import { ProductRow } from "pages-sections/admin";
import api from "utils/__api__/dashboard";
import Product from "models/Product.model";
// Back-End
import { collection, getDocs } from "firebase/firestore"; 
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../../../src/firebase";

// TABLE HEADING DATA LIST
const tableHeading = [
  // { id: "id", label: "Id", align: "center" },
  { id: "name", label: "Tên sp", align: "left" },
  { id: "final_name", label: "Tên final", align: "left" },
  { id: "image", label: "Hình ảnh", align: "center" },
  { id: "note", label: "Chú thích", align: "center" },
  { id: "china_code", label: "Mã TQ", align: "left" },
  { id: "kloudek_code", label: "Mã Kloudek", align: "left" },
  { id: "final_code", label: "Mã final", align: "center" },
  { id: "seat", label: "Số chỗ", align: "center" },
  { id: "material", label: "Chất liệu", align: "center" },
  { id: "dimensions", label: "Kích thước", align: "center" },
  { id: "color", label: "Màu sắc", align: "left" },
  { id: "historical_cost", label: "Giá gốc", align: "center" },
  { id: "rental_price", label: "Giá cho thuê", align: "center" },
  { id: "selling_price", label: "Giá bán", align: "center" },
  { id: "specification", label: "Đặc điểm", align: "center", width: 130 },
  { id: "action", label: "Chỉnh sửa", align: "center" },
];

// =============================================================================
ProductList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type ProductListProps = { products: Product[] };
// =============================================================================

export default function ProductList(props: ProductListProps) {
  const { products } = props;
  const [sanpham, setSanpham] = useState([]);
  const [render, setRender] = useState(false);

  // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const filteredProducts = sanpham[0]?.accent_chests_cabinets.map((item: any) => ({
    id: item.id,
    name: item.name,
    final_name: item.final_name,
    image: item.image,
    note: item.note,
    china_code: item.china_code,
    kloudek_code: item.kloudek_code,
    final_code: item.final_code,
    seat: item.seat,
    material: item.material,
    dimensions: item.dimensions,
    color: item.color,
    historical_cost: item.historical_cost,
    rental_price: item.rental_price,
    selling_price: item.selling_price,
    specification: item.specification,
    action: item.action,
  }));

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: filteredProducts });

  useEffect(() => {
    const fetchData = async () => {
        let allProduct = []
        try {
            const querySnapshot = await getDocs(collection(db, "rent_for_home"));
            querySnapshot.forEach((doc) => {
                allProduct.push(doc.data())
                setSanpham(allProduct)
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData(); // Gọi hàm fetchData để thực hiện truy vấn dữ liệu khi component được mount
}, [render]);

// console.log(sanpham);

  return (
    <Box py={4}>
      <H3 mb={2}>Bedroom Furniture</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="Thêm sản phẩm"
        searchPlaceholder="Search Product..."
        handleBtnClick={() => Router.push("/admin/rent-for-home/accent_furniture/accent_chests_cabinets/create")}
      />

      <Card>
        <Scrollbar autoHide={false}>
          <TableContainer sx={{ minWidth: 900 }}>
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={sanpham.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((product, index) => (
                  <ProductRow title='accent_furniture' product={product} setRender={setRender} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(sanpham.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.products();
  return { props: { products } };
};
