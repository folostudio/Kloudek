import { FC, useState } from "react";
import { Button, Card, Grid, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
import BazaarImage from "components/BazaarImage";
import { UploadImageBox, StyledClear } from "../../../StyledComponents";
//Firebase
import { arrayUnion, doc, setDoc } from "firebase/firestore"; 
import { auth, db, storage } from "../../../../../../src/firebase";
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// ================================================================
type ProductFormProps = {
  initialValues: any;
  handleFormSubmit: (values: any) => void;
  validationSchema: any;
  setSpecifications: (values : any) => void;
  setImgUrl: (values : any) => void;
};
// ================================================================

const ProductForm: FC<ProductFormProps> = (props) => {
  const { initialValues, validationSchema, handleFormSubmit, setSpecifications, setImgUrl } = props;
  const [files, setFiles] = useState([]);

  const [specification, setSpecification] = useState([]); // Mảng ban đầu với một phần tử rỗng

  const handleSpecificationChange = (index, event) => {
    event.preventDefault();
    setSpecification((prevSpecification) => {
      const updatedSpecification = [...prevSpecification];
      updatedSpecification[index] = event.target.value;
      return updatedSpecification;
    });
    setSpecifications((prevSpecification) => {
      const updatedSpecification = [...prevSpecification];
      updatedSpecification[index] = event.target.value;
      return updatedSpecification;
    });
  };

  const handleAddSpecificationField = () => {
    // Thêm một phần tử rỗng vào mảng specification khi người dùng muốn thêm trường nhập liệu mới
    setSpecification([...specification, '']);
  };

  const handleRemoveSpecificationField = (index) => {
    // Xóa một phần tử khỏi mảng specification khi người dùng muốn xóa trường nhập liệu
    const updatedSpecification = [...specification];
    updatedSpecification.splice(index, 1);
    setSpecification(updatedSpecification);
  };

  // HANDLE UPDATE NEW IMAGE VIA DROP ZONE
  const handleChangeDropZone = (newFiles) => {
    if(!newFiles){
      return
    }
    // Create previews for new files
    const filesWithPreviews = newFiles.map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));
    // Append new files to existing files
    setFiles((prevFiles) => [...prevFiles, ...filesWithPreviews]);

    const storage = getStorage();
    const downloadURLs = [];

    newFiles.forEach((file) => {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress tracking (optional)
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Error uploading file:', error);
      },
      async () => {
        // Handle successful uploads
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', downloadURL);
        // Add the download URL to the array
        downloadURLs.push(downloadURL);
        setImgUrl(downloadURLs);
      }
    );
  });
};

  const handleFileDelete = (fileToDelete) => () => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };

  // console.log(initialValues);

  return (
    <Card sx={{ p: 6 }}>
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
                  label="Tên sản phẩm"
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
                  name="final_name"
                  color="info"
                  size="medium"
                  label="Tên final"
                  placeholder="Tên final"
                  onBlur={handleBlur}
                  value={values.final_name}
                  onChange={handleChange}
                  error={!!touched.final_name && !!errors.final_name}
                  helperText={(touched.final_name && errors.final_name) as string}
                />
              </Grid>

              <Grid spacing={3} item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="china_code"
                  label="Mã TQ"
                  color="info"
                  size="medium"
                  placeholder="Mã TQ"
                  value={values.china_code}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.china_code && !!errors.china_code}
                  helperText={(touched.china_code && errors.china_code) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="kloudek_code"
                  color="info"
                  size="medium"
                  label="Mã Kloudek"
                  placeholder="Mã Kloudek"
                  onBlur={handleBlur}
                  value={values.kloudek_code}
                  onChange={handleChange}
                  error={!!touched.kloudek_code && !!errors.kloudek_code}
                  helperText={(touched.kloudek_code && errors.kloudek_code) as string}
                />
              </Grid>

              <Grid spacing={3} item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="final_code"
                  label="Mã final"
                  color="info"
                  size="medium"
                  placeholder="Mã final"
                  value={values.final_code}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.final_code && !!errors.final_code}
                  helperText={(touched.final_code && errors.final_code) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="seat"
                  color="info"
                  size="medium"
                  label="Số chỗ"
                  placeholder="Số chỗ"
                  onBlur={handleBlur}
                  value={values.seat}
                  onChange={handleChange}
                  error={!!touched.seat && !!errors.seat}
                  helperText={(touched.seat && errors.seat) as string}
                />
              </Grid>

              <Grid spacing={3} item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="material"
                  label="Chất liệu"
                  color="info"
                  size="medium"
                  placeholder="Chất liệu"
                  value={values.material}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.material && !!errors.material}
                  helperText={(touched.material && errors.material) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="depth"
                  color="info"
                  size="medium"
                  label="Chiều dài"
                  placeholder="Chiều dài"
                  onBlur={handleBlur}
                  value={values.depth}
                  onChange={handleChange}
                  error={!!touched.depth && !!errors.depth}
                  helperText={(touched.depth && errors.depth) as string}
                />
              </Grid>

              <Grid spacing={3} item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="width"
                  label="Chiều rộng"
                  color="info"
                  size="medium"
                  placeholder="Chiều rộng"
                  value={values.width}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.width && !!errors.width}
                  helperText={(touched.width && errors.width) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="height"
                  color="info"
                  size="medium"
                  label="Chiều cao"
                  placeholder="Chiều cao"
                  onBlur={handleBlur}
                  value={values.height}
                  onChange={handleChange}
                  error={!!touched.height && !!errors.height}
                  helperText={(touched.height && errors.height) as string}
                />
              </Grid>

              <Grid spacing={3} item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="color"
                  label="Màu sắc"
                  color="info"
                  size="medium"
                  placeholder="Màu sắc"
                  value={values.color}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.color && !!errors.color}
                  helperText={(touched.color && errors.color) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="historical_cost"
                  color="info"
                  size="medium"
                  label="Giá gốc"
                  type='number'
                  placeholder="Giá gốc"
                  onBlur={handleBlur}
                  value={values.historical_cost}
                  onChange={handleChange}
                  error={!!touched.historical_cost && !!errors.historical_cost}
                  helperText={(touched.historical_cost && errors.historical_cost) as string}
                />
              </Grid>
              <Grid spacing={3} item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="selling_price"
                  color="info"
                  size="medium"
                  label="Giá bán"
                  type='number'
                  placeholder="Giá bán"
                  onBlur={handleBlur}
                  value={values.selling_price}
                  onChange={handleChange}
                  error={!!touched.selling_price && !!errors.selling_price}
                  helperText={(touched.selling_price && errors.selling_price) as string}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="rental_price"
                  color="info"
                  size="medium"
                  label="Giá cho thuê"
                  type='number'
                  placeholder="Giá cho thuê"
                  onBlur={handleBlur}
                  value={values.rental_price}
                  onChange={handleChange}
                  error={!!touched.rental_price && !!errors.rental_price}
                  helperText={(touched.rental_price && errors.rental_price) as string}
                />
              </Grid>

              {specification.map((value, index: number) => (
                <Grid key={index} container spacing={1} item xs={12} md={12}>
                  <Grid item xs={11}>
                    <TextField
                      fullWidth
                      name={`specification_${index}`}
                      color="info"
                      size="medium"
                      label={`Đặt điểm ${index + 1}`}
                      type="text"
                      placeholder={`Đặt điểm ${index + 1}`}
                      onBlur={handleBlur}
                      value={values[`specification_${index}`]}
                      onChange={(event) => handleSpecificationChange(index, event)}
                      error={!!touched[`specification_${index}`] && !!errors[`specification_${index}`]}
                      helperText={(touched[`specification_${index}`] && errors[`specification_${index}`]) as string}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="error"
                      type="button"
                      style={{height: '100%'}}
                      onClick={() => handleRemoveSpecificationField(index)}
                    >
                      Xóa
                    </Button>
                  </Grid>
                </Grid>
              ))}
              
              <Grid item xs={12}>
                <Button color="info" type="button" onClick={handleAddSpecificationField}>
                  Thêm đặt điểm
                </Button>
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
                <DropZone onChange={(files) => handleChangeDropZone(files)} />
                <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                  {files.map((file, index) => {
                    return (
                      <UploadImageBox key={index}>
                        <BazaarImage src={file.preview} width="100%" />
                        <StyledClear onClick={handleFileDelete(file)} />
                      </UploadImageBox>
                    );
                  })}
                </FlexBox>
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Lưu sản phẩm
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default ProductForm;
