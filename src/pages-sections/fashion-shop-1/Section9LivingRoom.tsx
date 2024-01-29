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
  Typography,
} from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3Kloudek from "components/product-cards/ProductCard3Kloudek";
import Product from "models/Product.model";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import useWindowSize from "hooks/useWindowSize";
import Carousel from "components/carousel/Carousel";

// =============================================================
type Props = { products: any[] };
// =============================================================

const Section9LivingRoom = ({ products }) => {
  const { sofas_sectionals, cabinets, chairs, tables } = products || [];
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1.5);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  // const sanpham1 = sofas_Sectionals && chairs && tables ?  [ ...sofas_Sectionals, ...tables, ...chairs, ...cabinets] : []

  const [allproduct, setAllProduct] = useState(
    products?.length > 0
      ? [...sofas_sectionals, ...cabinets, ...chairs, ...tables]
      : sofas_sectionals
  );

  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
  const trendings = allproduct
  ? allproduct?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
  : sofas_sectionals?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const [sortPrice, setSortPrice] = useState("");

  const [openColor, setOpenColor] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const [openItemType, setOpenItemType] = useState(false);
  const [savedColor, setSavedColor] = useState("");
  const [savedMaterial, setSavedMaterial] = useState("");
  const [listFilter, setListFilter] = useState([]);
  const colorArray = allproduct ? allproduct : sofas_sectionals;
  const materialArray = allproduct ? allproduct : sofas_sectionals;

  const productTypes = [
    { label: "Sofas & Sectional", data: sofas_sectionals },
    { label: "Chairs", data: chairs },
    { label: "Tables", data: tables },
    { label: "TVs", data: [] },
    { label: "TV stand", data: [] },
    { label: "Cabinets", data: cabinets },
  ];
  const productImages = [
    { src: "/assets/images/sofas.jpg", alt: "Sofas", type: sofas_sectionals },
    {
      src: "/assets/images/consoles-tables.jpg",
      alt: "Consoles Tables",
      type: tables,
    },
    { src: "/assets/images/consoles.jpg", alt: "Consoles", type: cabinets },
    { src: "/assets/images/gheluoi.jpeg", alt: "Chairs", type: chairs },
    { src: "/assets/images/side-tables.jpg", alt: "Consoles", type: [] },
    { src: "/assets/images/ottoman.jpg", alt: "Consoles", type: [] },
  ];

  //  hàm xử lý sắp xếp giá
  const handleChangePrice = (event: SelectChangeEvent) => {
    const newSortPrice = event.target.value as string;
    setSortPrice(newSortPrice);

    // Kiểm tra nếu có giá trị sắp xếp mới, cập nhật lại mảng sản phẩm
    if (newSortPrice) {
      const sortedProducts = allproduct ? [...allproduct] : sofas_sectionals;
      sortedProducts.sort((a, b) =>
        newSortPrice === "increase"
          ? a.selling_price - b.selling_price
          : newSortPrice === "decrease"
          ? b.selling_price - a.selling_price
          : 0
      );
      setAllProduct(sortedProducts);
    }
  };
  const handleItemType = () => {
    setOpenItemType(!openItemType);
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
 
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={4}
        autoPlay={false}
        spacing='30px'
      >
        {productImages.map((product, index) => (
          <Box key={index} onClick={() => setAllProduct(product.type)}>
            <img
              src={product.src}
              alt={product.alt}
              width="100%"
              height={150}
            />
          </Box>
        ))}
        </Carousel>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignContent={"center"}
        my="2px"
        mb="10px"
      >
        <Grid item justifyContent={"start"}>
          {listFilter.length > 0 ? (
            listFilter.map((filter, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={`${filter.filter}: ${filter.value}`}
                onDelete={() => handleDeleteFilter(index)}
                style={{ marginRight: "5px", backgroundColor: "#fff" }}
              />
            ))
          ) : (
            <div></div>
          )}
        </Grid>
        <Grid item xs={12} md={6} justifyContent={"start"}>
          <Box
            sx={{
              width: {
                md: 150,
                xs: "100%",
                width: "100%",
                bgcolor: "background.paper",
                float: "right",
              },
            }}
          >
            <FormControl
              fullWidth
              sx={{ width: "100%", bgcolor: "background.paper" }}
            >
              <InputLabel id="demo-simple-select-label" color="warning">
                Giá
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortPrice}
                label="Theo giá"
                onChange={handleChangePrice}
              >
                <MenuItem value="increase">Giá tăng dần</MenuItem>
                <MenuItem value="decrease">Giá giảm dần</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      {/* {/ Màu, vật liệu, loại nội thất /} */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} mt={1}>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleItemType}>
              <ListItemText primary="Loại sản phẩm" />
              {openItemType ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openItemType} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {productTypes.map((productType, index) => (
                  <Box
                    key={index}
                    onClick={() => setAllProduct(productType.data)}
                    px={2}
                    pb={1}
                    sx={{ ":hover": { cursor: "pointer", color: "red" } }}
                  >
                    {productType.label}
                  </Box>
                ))}
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleColor}>
              <ListItemText primary="Màu" />
              {openColor ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openColor} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {colorArray?.map((item: any, index: any) => {
                  // Chuyển đổi chữ cái đầu thành in hoa còn lại là chữ thường
                  const formattedColor = item?.color
                    ? item?.color.charAt(0).toUpperCase() +
                      item?.color.slice(1).toLowerCase()
                    : "";
                  // Kiểm tra nếu giá trị đã xuất hiện trước đó trong mảng
                  const isDuplicate = colorArray
                    .slice(0, index)
                    .some(
                      (prevItem: any) =>
                        prevItem?.color?.toLowerCase() ===
                        item?.color?.toLowerCase()
                    );
                  // Nếu không trùng nhau, render phần tử
                  if (!isDuplicate) {
                    return (
                      <Box
                        key={index}
                        sx={{ px: 2, ":hover": { color: "red" } }}
                      >
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

              bgcolor: "background.paper",
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
                {materialArray?.map((item: any, index: any) => {
                  // Chuyển đổi chữ cái đầu thành in hoa còn lại là chữ thường
                  const formattedMaterial = item?.material
                    ? item?.material.trim().charAt(0).toUpperCase() +
                      item?.material.slice(1).toLowerCase()
                    : "";
                  // Kiểm tra nếu giá trị đã xuất hiện trước đó trong mảng
                  const isDuplicate = materialArray
                    .slice(0, index)
                    .some(
                      (prevItem: any) =>
                        prevItem?.material?.toLowerCase() ===
                        item?.material?.toLowerCase()
                    );
                  // Nếu không trùng nhau, render phần tử
                  if (!isDuplicate) {
                    return (
                      <Box
                        key={index}
                        sx={{ px: 2, ":hover": { color: "red" } }}
                      >
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

        <Grid item md={10}>
          <Grid container xs={12} spacing={1} m="auto">
            {listFilter.length > 0
              ? allproduct
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
                  })
                  .sort((a, b) =>
                    sortPrice == "increase"
                      ? a.selling_price - b.selling_price
                      : sortPrice == "decrease"
                      ? b.selling_price - a.selling_price
                      : a.selling_price
                  )
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
              : trendings
                  ?.sort((a, b) =>
                    sortPrice == "increase"
                      ? a.selling_price - b.selling_price
                      : sortPrice == "decrease"
                      ? b.selling_price - a.selling_price
                      : a.selling_price
                  )
                  .map((item: any, index: any) => (
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
      </Grid>

      <Box py={3} display="flex" justifyContent="center">
        <Stack spacing={2}>
          <Pagination
            onChange={handleChange}
            page={page}
            count={
              allproduct
                ? Math.ceil(allproduct?.length / 12)
                : Math.ceil(sofas_sectionals?.length / 12) - 1
            }
            shape="rounded"
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default Section9LivingRoom;
