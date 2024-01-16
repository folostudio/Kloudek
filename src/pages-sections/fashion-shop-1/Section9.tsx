import { FC, useEffect, useState } from "react";
import {
  Box,
  Collapse,
  Container,
  Chip,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3Kloudek from "components/product-cards/ProductCard3Kloudek";
import Product from "models/Product.model";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

// =============================================================
type Props = { products: any[] };
// =============================================================

const Section9 = (props: any) => {
  const [page, setPage] = useState(1);
  const trendings = props?.products?.slice(
    page > 1 ? page * 10 : 0,
    page * 10 + 10
  );
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const [sortPrice, setSortPrice] = useState('');
  const [openColor, setOpenColor] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const [savedColor, setSavedColor] = useState("");
  const [savedMaterial, setSavedMaterial] = useState("");
  const [listFilter, setListFilter] = useState([]);


  //  hàm xử lý sắp xếp giá
  const handleChangePrice = (event: SelectChangeEvent) => {
    setSortPrice(event.target.value as string);
  };
  const handleColor = () => {
    setOpenColor(!openColor);
    setSavedColor("");
    // setListFilter([]);
  };
  const handleMaterial = () => {
    setOpenMaterial(!openMaterial);
    setSavedMaterial("");
    // setListFilter([]);
  };

  const handleColorOnClick = (value) => {
    setSavedColor(value);
    // Check if there is already a 'Color' filter in the list
    const colorFilterIndex = listFilter.findIndex(
      (filter) => filter.filter === "Color"
    );
    if (colorFilterIndex !== -1) {
      // If 'Color' filter exists, update its value
      setListFilter((prevFilters) => {
        const newFilters = [...prevFilters];
        newFilters[colorFilterIndex] = { filter: "Color", value: value };
        return newFilters;
      });
    } else {
      // If 'Color' filter doesn't exist, add a new filter
      setListFilter((prevFilters) => [
        ...prevFilters,
        { filter: "Color", value: value },
      ]);
    }
  };

  const handleMaterialOnClick = (value) => {
    setSavedMaterial(value);
    // Check if there is already a 'Material' filter in the list
    const materialFilterIndex = listFilter.findIndex(
      (filter) => filter.filter === "Material"
    );

    if (materialFilterIndex !== -1) {
      // If 'Material' filter exists, update its value
      setListFilter((prevFilters) => {
        const newFilters = [...prevFilters];
        newFilters[materialFilterIndex] = { filter: "Material", value: value };
        return newFilters;
      });
    } else {
      // If 'Material' filter doesn't exist, add a new filter
      setListFilter((prevFilters) => [
        ...prevFilters,
        { filter: "Material", value: value },
      ]);
    }
  };

  const handleDeleteFilter = (index) => {
    setListFilter((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters.splice(index, 1);
      return newFilters;
    });
  };

  return (
    <Container sx={{ mt: 2 }}>
       {/* sắp xếp giá */}
      <Box sx={{display:'flex', justifyContent:'flex-end'}}>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Giá</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortPrice}
          label="Theo giá"
          onChange={handleChangePrice}
        >
          <MenuItem value='increase'>Giá tăng dần</MenuItem>
          <MenuItem value='increase'>Giá giảm dần</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            direction: { md: "row" },
            wrap: { md: "nowrap" },
            height: "50px",
            alignContent: "center",
          }}
        >
          {listFilter.length > 0
            ? listFilter.map((filter, index) => (
                <Chip
                  key={index}
                  label={`${filter.filter}: ${filter.value}`}
                  onDelete={() => handleDeleteFilter(index)}
                  style={{ marginRight: "5px" }}
                />
              ))
            : ""}
        </Grid>

        <Grid
          item
          md={2}
          sx={{ direction: { md: "row" }, wrap: { md: "nowrap" } }}
        >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleColor}>
              <ListItemText primary="Color" />
              {openColor ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openColor} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {props?.products?.map((item: any, index: any) => {
                  // Chuyển đổi chữ cái đầu thành in hoa còn lại là chữ thường
                  const formattedColor = item?.color
                    ? item?.color.charAt(0).toUpperCase() +
                      item?.color.slice(1).toLowerCase()
                    : "";
                  // Kiểm tra nếu giá trị đã xuất hiện trước đó trong mảng
                  const isDuplicate = props.products
                    .slice(0, index)
                    .some(
                      (prevItem: any) =>
                        prevItem?.color?.toLowerCase() ===
                        item?.color?.toLowerCase()
                    );
                  // Nếu không trùng nhau, render phần tử
                  if (!isDuplicate) {
                    return (
                      <Box key={index} sx={{ px: 2 }}>
                        <ListItemText
                          primary={formattedColor}
                          onClick={() => handleColorOnClick(formattedColor)}
                          style={{ cursor: "pointer" }}
                        />
                      </Box>
                    );
                  }
                  // Nếu trùng nhau, trả về null để không render phần tử này
                  return null;
                })}
              </List>
            </Collapse>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              mt: 1,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleMaterial}>
              <ListItemText primary="Material" />
              {openMaterial ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMaterial} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {props?.products?.map((item: any, index: any) => {
                  // Chuyển đổi chữ cái đầu thành in hoa còn lại là chữ thường
                  const formattedMaterial = item?.material
                    ? item?.material.trim().charAt(0).toUpperCase() +
                      item?.material.slice(1).toLowerCase()
                    : "";
                  // Kiểm tra nếu giá trị đã xuất hiện trước đó trong mảng
                  const isDuplicate = props.products
                    .slice(0, index)
                    .some(
                      (prevItem: any) =>
                        prevItem?.material?.toLowerCase() ===
                        item?.material?.toLowerCase()
                    );
                  // Nếu không trùng nhau, render phần tử
                  if (!isDuplicate) {
                    return (
                      <Box key={index} sx={{ px: 2 }}>
                        <ListItemText
                          primary={formattedMaterial}
                          onClick={() =>
                            handleMaterialOnClick(formattedMaterial)
                          }
                          style={{ cursor: "pointer" }}
                        />
                      </Box>
                    );
                  }
                  // Nếu trùng nhau, trả về null để không render phần tử này
                  return null;
                })}
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item container md={10} xs={12} spacing={1}>
          {listFilter.length > 0
            ? props?.products
                ?.filter((item) => {
                  // Check if Color filter exists in listFilter
                  const colorFilter = listFilter.find(
                    (filter) => filter.filter === "Color"
                  );

                  // Check if Material filter exists in listFilter
                  const materialFilter = listFilter.find(
                    (filter) => filter.filter === "Material"
                  );

                  // Apply filters based on conditions
                  if (colorFilter && materialFilter) {
                    return (
                      item.color === colorFilter.value &&
                      item.material === materialFilter.value
                    );
                  } else if (colorFilter) {
                    return item.color === colorFilter.value;
                  } else if (materialFilter) {
                    return item.material === materialFilter.value;
                  }

                  return true; // If no filters, include all items
                }).sort((a,b) => sortPrice == 'increase'? a.selling_price - b.selling_price : sortPrice == 'increase' ? b.selling_price - a.selling_price : a.selling_price)
                .map((filteredItem, index) => (
                  <Grid item xs={12} sm={4} md={3} key={index}>
                    <ProductCard3Kloudek
                      china_code={filteredItem?.china_code}
                      color={filteredItem?.color}
                      dimensions={filteredItem?.dimensions}
                      final_code={filteredItem?.final_code}
                      final_name={filteredItem?.final_name}
                      historical_cost={filteredItem?.historical_cost}
                      id={filteredItem?.id}
                      image={filteredItem?.image}
                      kloudek_code={filteredItem?.kloudek_code}
                      material={filteredItem?.material}
                      name={filteredItem?.name}
                      note={filteredItem?.note}
                      rental_price={filteredItem?.rental_price}
                      seat={filteredItem?.seat}
                      selling_price={filteredItem?.selling_price}
                      specification={filteredItem?.specification}
                      slug={filteredItem?.name}
                    />
                  </Grid>
                ))
            : trendings?.sort((a,b) => sortPrice == 'increase'? a.selling_price - b.selling_price : sortPrice == 'increase' ? b.selling_price - a.selling_price : a.selling_price ).map((item: any, index: any) => (
                <Grid item xs={12} sm={4} md={3} key={index}>
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
      <Box py={3} display="flex" justifyContent="center">
        <Stack spacing={2}>
          <Pagination
            onChange={handleChange}
            page={page}
            count={Math.round(props?.products?.length / 10)}
            shape="rounded"
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default Section9;
