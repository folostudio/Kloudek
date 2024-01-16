import { FC, useEffect, useState } from "react";
import { Box, Collapse, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3Kloudek from "components/product-cards/ProductCard3Kloudek";
import Product from "models/Product.model";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

// =============================================================
type Props = { products: any[] };
// =============================================================

const Section9 = (props : any) => {

  const [page, setPage] = useState(1);
  const trendings = props?.products?.slice(page > 1 ? page*10 : 0, page *10 +10);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const [openColor, setOpenColor] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const handleColor = () => { setOpenColor(!openColor) };
  const handleMaterial = () => { setOpenMaterial(!openMaterial) };

  const handleColorOnClick = (value) => {
    alert(value);
  }

  const handleMaterialOnClick = (value) => {
    alert(value);
  }


  return (
    <Container sx={{mt:2}}>
      <Grid container spacing={2}>
      <Grid item md={2}>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleColor}>
        <ListItemText primary="Color" />
        {openColor ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openColor} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{maxHeight: '300px',overflowY: 'auto'}}>
          {props?.products?.map((item: any, index: any) => {
            // Chuyển đổi chữ cái đầu thành in hoa còn lại là chữ thường
            const formattedColor = item?.color ? item?.color.charAt(0).toUpperCase() + item?.color.slice(1).toLowerCase() : '';
            // Kiểm tra nếu giá trị đã xuất hiện trước đó trong mảng
            const isDuplicate = props.products.slice(0, index).some((prevItem: any) => (
            prevItem?.color?.toLowerCase() === item?.color?.toLowerCase()
          ));
          // Nếu không trùng nhau, render phần tử
          if (!isDuplicate) {
            return (
              <Box key={index} sx={{ px: 2 }}>
                <ListItemText primary={formattedColor} onClick={() => handleColorOnClick(formattedColor)} style={{cursor: 'pointer'}}/>
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
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt:1 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleMaterial}>
        <ListItemText primary="Material" />
        {openMaterial ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMaterial} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{maxHeight: '300px',overflowY: 'auto'}}>
            {props?.products?.map((item: any, index: any) => {
              // Chuyển đổi chữ cái đầu thành in hoa còn lại là chữ thường
              const formattedMaterial = item?.material ? item?.material.charAt(0).toUpperCase() + item?.material.slice(1).toLowerCase() : '';
              // Kiểm tra nếu giá trị đã xuất hiện trước đó trong mảng
              const isDuplicate = props.products.slice(0, index).some((prevItem: any) => (
                prevItem?.material?.toLowerCase() === item?.material?.toLowerCase()
              ));
              // Nếu không trùng nhau, render phần tử
              if (!isDuplicate) {
                return (
                  <Box key={index} sx={{ px: 2 }}>
                    <ListItemText primary={formattedMaterial} onClick={() => handleMaterialOnClick(formattedMaterial)} style={{cursor: 'pointer'}}/>
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
          {trendings?.map((item: any, index: any) => (
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
      <Box py={3} display='flex' justifyContent='center'>
        <Stack spacing={2}>
          <Pagination onChange={handleChange} page={page} count={Math.round(props?.products?.length/10)} shape="rounded" />
        </Stack>
      </Box>
    </Container>
  );
};

export default Section9;