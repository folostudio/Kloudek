import { FC, useState } from "react";
import { Box, Collapse, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3Kloudek from "components/product-cards/ProductCard3Kloudek";
import Product from "models/Product.model";

// =============================================================
type Props = { products: any[] };
// =============================================================
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
const Section9 = (props : any) => {
  const [page, setPage] = useState(1);
  const trendings = props?.products?.slice(page > 1 ? page*10 : 0, page *10 +10);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
   setPage(value)
  }
  const [open, setOpen] = useState(true);

  
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container sx={{mt:2}}>
      <Grid container spacing={2}>
      <Grid item md={2}>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Color" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt:1 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Material" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {trendings?.map((item: any, index: any) => (
              <Box key={index}>
              
              <ListItemText  primary={item?.color} />
              </Box>
          
            ))}
            
      
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
