import { ReactElement, useState } from "react";
import { Box } from "@mui/material";
import * as yup from "yup";
import { H3 } from "components/Typography";
import ProductForm from "pages-sections/admin/rent_for_home/accent_furniture/accent_chests_cabinets//ProductForm";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import {useRouter} from 'next/router';
// Back-End
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';
import { db } from "../../../../../src/firebase";
import { useSnackbar } from "notistack";


// =============================================================================
CreateProduct.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function CreateProduct() {
  const router = useRouter()
  const [specificationsProp, setSpecifications] = useState([])
  const [imgUrl, setImgUrl] = useState([])
  const { enqueueSnackbar } = useSnackbar();
  const [INITIAL_VALUES, setINITIAL_VALUES] = useState({
    id: "",
    name: '',
    final_name: '',
    image: [],
    note: '',
    china_code: '',
    kloudek_code: '',
    final_code: '',
    seat: '',
    material: '',
    dimensions: [],
    color: '',
    historical_cost: 0,
    selling_price: 0,
    rental_price: 0,
    specification: [],
    depth: '',
    width: '',
    height: '',
  });

  const validationSchema = yup.object().shape({
    // name: yup.string().required("required"),
    // category: yup.array().min(1).required("required"),
    // description: yup.string().required("required"),
    // stock: yup.number().required("required"),
    // price: yup.number().required("required"),
    // sale_price: yup.number().required("required"),
    // tags: yup.string().required("required"),
  });

  const handleFormSubmit = async (values: typeof INITIAL_VALUES) => {
    try {
      const result = await updateDoc(doc(db, 'rent_for_home', 'bed_bath'), {
        bedroom_furniture: arrayUnion({
          id: uuidv4(),
          name: values.name,
          final_name: values.final_name,
          image: imgUrl,
          note: values.note,
          china_code: values.china_code,
          kloudek_code: values.kloudek_code,
          final_code: values.final_code,
          seat: values.seat,
          material: values.material,
          dimensions: [values.depth, values.width, values.height],
          color: values.color,
          historical_cost: values.historical_cost,
          selling_price: values.selling_price,
          rental_price: values.rental_price,
          specification: specificationsProp
        })
      })
      enqueueSnackbar("Thêm sản phẩm thành công", { variant: "success" });
      setINITIAL_VALUES({
        id: uuidv4(),
          name: '',
          final_name: '',
          image: [],
          note: '',
          china_code: '',
          kloudek_code: '',
          final_code: '',
          seat: '',
          material: '',
          dimensions: [],
          color: '',
          historical_cost: 0,
          selling_price: 0,
          rental_price: 0,
          specification: [],
          depth: '',
          width: '',
          height: '',
      })
      setImgUrl([])
      router.push("/admin/rent-for-home/bed_bath/bedroom_furniture")
    } catch (error) {
      console.log('Có lỗi khi lưu dữ liệu: ', error);
      enqueueSnackbar("Thêm sản phẩm thất bại", { variant: "error" });
    }
    // console.log('hi', specificationsProp);
    // console.log('Form Values:', values);
  };

  return (
    <Box py={4}>
      <H3 mb={2}>Thêm sản phẩm</H3>

      <ProductForm
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        handleFormSubmit={handleFormSubmit}
        setSpecifications={setSpecifications}
        setImgUrl={setImgUrl}
      />
    </Box>
  );
}
