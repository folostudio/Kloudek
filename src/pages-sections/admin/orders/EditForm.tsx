import { FC, useEffect, useState } from "react";
import { Avatar, Button, Box, Card, Grid, MenuItem, TextField, Typography, FormLabel, Chip } from "@mui/material";
import { Formik } from "formik";
import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
import BazaarImage from "components/BazaarImage";
import { UploadImageBox, StyledClear } from "../StyledComponents";
// Back-End
import { arrayRemove, arrayUnion, doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; 
import { auth, db, storage } from "../../../../src/firebase";
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { v4 as uuidv4 } from 'uuid';
import { Paragraph } from "components/Typography";
// ================================================================
type EditForm = {
  initialValues: any;
  title: any;
  setOpen: (values: any) => void;
  setRender: (values: any) => void;
};
// ================================================================

const EditForm: FC<EditForm> = (props) => {
  const { initialValues, title, setOpen, setRender } = props;
  const { enqueueSnackbar } = useSnackbar();

  // console.log(props.initialValues['name']);
  

  const validationSchema = yup.object().shape({
    // name: yup.string().required("required"),
    // category: yup.array().min(1).required("required"),
    // description: yup.string().required("required"),
    // stock: yup.number().required("required"),
    // price: yup.number().required("required"),
    // sale_price: yup.number().required("required"),
    // tags: yup.string().required("required"),
    
  });

  const handleFormSubmit = async (values: typeof initialValues) => {
    let updatedObject = {
        address: values.address,
        date: values.date,
        email: values.email,
        id: values.id,
        name: values.name,
        note: values.note,
        phone: values.phone,
        price: values.price,
        products: values.products,
        quantity: values.quantity,
        voucher: values.voucher || '',
        sum: values.sum,
      };

    const result = window.confirm("Bạn có chắc cập nhật sản phẩm");
  
    if (result) {
    try {
      const roomRef = doc(db, "orders", 'am09mJfmXgULicYqNbm5');

      // Get the current data of the document
      const roomSnapshot = await getDoc(roomRef);
      const currentData = roomSnapshot.data();

      // Find the index of the object to be updated
      const indexToUpdate = currentData.list.findIndex(
        item => item.id === values.id
      );

      if (indexToUpdate !== -1) {
        // Update the object in the array with the new values
        currentData.list[indexToUpdate] = updatedObject;

        // Update the document with the modified array
        await updateDoc(roomRef, {
          list: currentData.list
        });
        setOpen(false)
        setRender(true)
        enqueueSnackbar("Cập nhật sản phẩm thành công", { variant: "success" });
      } else {
        enqueueSnackbar("Cập nhật sản phẩm không thành công", { variant: "error" });
      }
    } catch (error) {
      console.log('Có lỗi khi cập nhật sản phẩm', error);
      enqueueSnackbar("Cập nhật sản phẩm không thành công", { variant: "error" });
    }
  }
};

  return (
    <Card sx={{ p: 2 }}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Tên khách hàng"
                  color="info"
                  size="medium"
                  placeholder="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={(touched.name && errors.name) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  color="info"
                  size="medium"
                  label="Email"
                  placeholder="Email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors.email) as string}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Số điện thoại"
                  color="info"
                  size="medium"
                  placeholder="Số điện thoại"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.phone && !!errors.phone}
                  helperText={(touched.phone && errors.phone) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="address"
                  color="info"
                  size="medium"
                  label="Địa chỉ"
                  placeholder="Địa chỉ"
                  onBlur={handleBlur}
                  value={values.address}
                  onChange={handleChange}
                  error={!!touched.address && !!errors.address}
                  helperText={(touched.address && errors.address) as string}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="note"
                  color="info"
                  size="medium"
                  label="Ghi chú"
                  placeholder="Ghi chú"
                  multiline
                  minRows={4}
                  maxRows={4} 
                  onBlur={handleBlur}
                  value={values.note}
                  onChange={handleChange}
                  error={!!touched.note && !!errors.note}
                  helperText={(touched.note && errors.note) as string} />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="info" type="submit" sx={{float: 'right'}}>
                  Cập nhật
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default EditForm;
