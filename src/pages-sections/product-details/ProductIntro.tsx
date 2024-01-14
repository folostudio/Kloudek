import Link from "next/link";
import { FC, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Grid, Typography } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { FlexBox, FlexRowCenter } from "../../components/flex-box";
import Product from "models/Product.model";
import { currency } from "lib";
import productVariants from "data/product-variants";
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useSettings from "hooks/useSettings";

// ================================================================
type ProductIntroProps = { product: any };
// ================================================================

const ProductIntro = ({product} ) => {
  const {settings, updateSettings} = useSettings()
console.log(settings);
// updateSettings({"a":3})
  
  const { id, rental_price, name, image, slug, selling_price, qty, final_name } = product || settings;
  
  
  const [selectedValue, setSelectedValue] = useState('a');
  const currencies = [
    {
      value: 1,
      label: '1 tháng',
    },
    {
      value: 2,
      label: '2 tháng',
    },
    {
      value: 3,
      label: '3 tháng',
    },
    {
      value: 4,
      label: '4 tháng',
    },
  ];
  const currencies1 = [
    {
      value: '1',
      label: 'Mua',
    },
  ];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const { state, dispatch } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectVariants, setSelectVariants] = useState(1);
  const [totalRent, setTotalRent] = useState(rental_price)


  
  // HANDLE CHAMGE TYPE AND OPTIONS
  const handleChangeVariant = (e: any) => () => {
    setSelectVariants(e)
    if(e === 1) return setTotalRent(rental_price)
    if(e === 2) return setTotalRent(rental_price*2)
    if(e === 3) return setTotalRent(rental_price*3)
    if(e === 4) return setTotalRent(rental_price*4)
  };
  
  
  // CHECK PRODUCT EXIST OR NOT IN THE CART
  const cartItem = state.cart.find((item) => item.id === id);

  // HANDLE SELECT IMAGE
  const handleImageClick = (ind: number) => () => setSelectedImage(ind);
 
  
  // HANDLE CHANGE CART
  const handleCartAmountChange = (amount: number) => () => {
    if(selectedValue === "b") {
      updateSettings({
        price : selling_price, qty: amount, name,final_name,  image, id, slug, rental_price, brand : "Mua"
      })
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: { price : selling_price, qty: amount, name,final_name,  image, id, slug, rental_price, brand : "Mua"},
      });
    }
   if(selectedValue === "a") {
    updateSettings({
      price: totalRent, qty: amount, name,final_name,  image, id, slug, brand:`Thuê ${selectVariants} tháng`
    })
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { price: totalRent, qty: amount, name,final_name,  image, id, slug, brand:`Thuê ${selectVariants} tháng`  },
    });
   }
  };

  return (
    <Box width="100%">
      <Grid container spacing={2}  justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox mx='auto' mb={6} sx={{width:{md:500, xs:'100%',justifyContent:'center'}}}>
            <img
              alt={final_name}
              loading="eager"
              src={image && image[selectedImage]}
              style={{ objectFit: "contain", borderRadius: '8px', maxHeight:'400px', maxWidth:'100%' }}
            />
          </FlexBox>

          <Box sx={{display:'flex', justifyContent:'center', gap:2}} overflow="auto">
            {image?.map((url: any, ind: any) => (
              url ? (
                <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
             
                style={{ cursor: "pointer" }}
                onClick={handleImageClick(ind)}
               
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <Avatar src={url} alt="avatar" variant="square" sx={{ height: 40 }} />
              </FlexRowCenter>
              ) : ''
            ))}
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={1}>{final_name}</H1>

          <FlexBox alignItems="center" mb={1}>
            <Box>Choose how you want it</Box>
            {/* <H6>Xiaomi</H6> */}
          </FlexBox>

         <div>
         <FlexBox alignItems="center" mb={2}>
            <Box sx={{ backgroundColor: selectedValue === 'a' ? '#FFCC99' : '#EEEEEE', width: '100%',borderRadius:2  }}>
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
              />
               Thuê ngay với {currency(totalRent)}đ - {selectVariants} tháng
              <div style={{display:selectedValue === 'a' ? 'block' : 'none'}}>
              <Typography my={1}>- Fast, free delivery & assembly</Typography>
              <Typography my={1}>- Rent-to-own flexibility</Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="1"
                   
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}  onClick={handleChangeVariant(option.value)}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Box sx={{display:'flex'}}>
              {/* <Button
                color="primary"
                variant="outlined"
                onClick={handleAddRent}
                sx={{ height: "32px", width: "32px", borderRadius: "300px" }}
              >
                <Add fontSize="small" />
              </Button> */}

              {/* <Box fontWeight={600} fontSize="15px" my="3px" mx={3}>
                {qtyRent}
              </Box> */}

              {/* <Button
                color="primary"
                variant="outlined"
                // disabled={item.qty === 1}
                // onClick={handleCartAmountChange(item.qty - 1, item)}
                onClick={handleRemoveRent}
                sx={{ height: "32px", width: "32px", borderRadius: "300px" }}
              >
                <Remove fontSize="small" />
              </Button> */}
            </Box>
                </Box>
              </Box>
              </div>
            </Box>
          </FlexBox>
          <FlexBox alignItems="center" mb={2}>
            <Box sx={{ backgroundColor:selectedValue === 'b' ? '#FFCC99' : '#EEEEEE', width: '100%', borderRadius:2 }}>
              <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
              />
               Mua ngay với {currency(selling_price)}
              <div style={{display:selectedValue === 'b' ? 'block' : 'none'}}>
              <Typography my={1}>- Fast, free delivery & assembly</Typography>
              <Typography my={1}>- Rent-to-own flexibility</Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="1"
                  >
                    {currencies1?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Box sx={{display:'flex'}}>
              {/* <Button
                color="primary"
                variant="outlined"
                // onClick={handleCartAmountChange(item.qty + 1, item)}
                sx={{ height: "32px", width: "32px", borderRadius: "300px" }}
              >
                <Add fontSize="small" />
              </Button> */}

              {/* <Box fontWeight={600} fontSize="15px" my="3px" mx={3}>
                {item.qty} 1
              </Box> */}

              {/* <Button
                color="primary"
                variant="outlined"
                // disabled={item.qty === 1}
                // onClick={handleCartAmountChange(item.qty - 1, item)}
                sx={{ height: "32px", width: "32px", borderRadius: "300px" }}
              >
                <Remove fontSize="small" />
              </Button> */}
            </Box>
                </Box>
              </Box>
              </div>
            </Box>
          </FlexBox>
         </div>
           
          {/* 
          {productVariants.map((variant) => (
            <Box key={variant.id} mb={2}>
              <H6 mb={1}>{variant.title}</H6>

              {variant.values.map(({ id, value }) => (
                <Chip
                  key={id}
                  label={value}
                  onClick={handleChangeVariant(variant.title, value)}
                  sx={{ borderRadius: "4px", mr: 1, cursor: "pointer" }}
                  color={
                    selectVariants[variant.title.toLowerCase()] === value
                      ? "primary"
                      : "default"
                  }
                />
              ))}
            </Box>
          ))} */}

          <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
             {selectedValue === 'b' ? `Mua ${currency(selling_price)}đ` : `Thuê ${currency(totalRent)}đ `}
            </H2>
            {/* <Box color="inherit">Stock Available</Box> */}
          </Box>

          {!cartItem?.qty ? (
            <Button
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1)}
              sx={{ mb: 4.5, px: "1.75rem", height: 40 }}
            >
              Thêm vào giỏ hàng
            </Button>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <Button
                size="small"
                sx={{ p: 1 }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </Button>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <Button
                size="small"
                sx={{ p: 1 }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </Button>
            </FlexBox>
          )}

          {/* <FlexBox alignItems="center" gap={1} mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shops/scarlett-beauty">
              <H6>Mobile Store</H6>
            </Link>
          </FlexBox> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
