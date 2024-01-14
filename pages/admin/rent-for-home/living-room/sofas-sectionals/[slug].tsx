import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import * as yup from "yup";
import { H3 } from "components/Typography";
import { ProductForm } from "pages-sections/admin";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
// import api from "utils/__api__/products";

// =============================================================================
EditProduct.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

const INITIAL_VALUES = {
  name: "",
  tags: "",
  stock: "",
  price: 0,
  category: [],
  sale_price: "",
  description: "",
};

// form field validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required("required"),
});

export default function EditProduct() {
  const { query } = useRouter();
  const [product, setProduct] = useState({ ...INITIAL_VALUES });
  const [specificationsProp, setSpecifications] = useState([])
  const [imgUrl, setImgUrl] = useState([])

  // useEffect(() => {
  //   api.getProduct(query.slug as string).then((data) => {
  //     setProduct((state) => ({
  //       ...state,
  //       name: data.title,
  //       price: data.price,
  //       category: data.categories,
  //     }));
  //   });
  // }, [query.slug]);

  const handleFormSubmit = () => {};

  return (
    <Box py={4}>
      <H3 mb={2}>Edit Product</H3>

      {/* <ProductForm
        initialValues={product}
        validationSchema={validationSchema}
        handleFormSubmit={handleFormSubmit}
        setSpecifications={setSpecifications}
        setImgUrl={setImgUrl}
      /> */}
    </Box>
  );
}
