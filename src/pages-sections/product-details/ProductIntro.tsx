import Link from "next/link";
import { FC, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H5, H6 } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { FlexBox, FlexRowCenter } from "../../components/flex-box";
import Product from "models/Product.model";
import { currency } from "lib";
import productVariants from "data/product-variants";
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useSettings from "hooks/useSettings";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// ================================================================
type ProductIntroProps = { product: any };
// ================================================================

const ProductIntro = ({product} ) => {
  const {settings, updateSettings} = useSettings()

// updateSettings({"a":3})
  
  const { id, rental_price, name, image, slug, selling_price, qty, final_name, color,final_code,material } = product || settings;
  
  const toLowerCaseColor = color?.toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/đ/g, 'd').replace(/Đ/g, 'D')
  // const finalColor = toLowerCaseColor === 'xanh' ? 'green' : toLowerCaseColor === 'do' ? 'red' : toLowerCaseColor === 'nau' ? 'brown' : toLowerCaseColor === 'den' ?
  // 'black' : toLowerCaseColor === 'trang' ? 'white' : toLowerCaseColor === 'xam' ? 'grey' : toLowerCaseColor === 'kem' ? '#FAF0E6' : toLowerCaseColor === 'da' ? '#FFFAF0' :
  // toLowerCaseColor === 'xanh ngoc' ? '#32CD32' : toLowerCaseColor === 'xanh bien' ? 'blue' : toLowerCaseColor === 'be' ? '#DDDDDD' : toLowerCaseColor === ' nau nhat' ? '#FFD39B' : ''
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
    {
      value: 5,
      label: '5 tháng',
    },
    {
      value: 6,
      label: '6 tháng',
    },
    {
      value: 7,
      label: '7 tháng',
    },
    {
      value: 8,
      label: '8 tháng',
    },
    {
      value: 9,
      label: '9 tháng',
    },
    {
      value: 10,
      label: '10 tháng',
    },
    {
      value: 11,
      label: '11 tháng',
    },
    {
      value: 12,
      label: '12 tháng',
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
    if(e === 5) return setTotalRent(rental_price*5)
    if(e === 6) return setTotalRent(rental_price*6)
    if(e === 7) return setTotalRent(rental_price*7)
    if(e === 8) return setTotalRent(rental_price*8)
    if(e === 9) return setTotalRent(rental_price*9)
    if(e === 10) return setTotalRent(rental_price*10)
    if(e === 11) return setTotalRent(rental_price*11)
    if(e === 12) return setTotalRent(rental_price*12)
  };
  
  
  // CHECK PRODUCT EXIST OR NOT IN THE CART
  const cartItem = state.cart.find((item) => item.id === id);

  // HANDLE SELECT IMAGE
  const handleImageClick = (ind: number) => () => setSelectedImage(ind);
 
  
  // HANDLE CHANGE CART
  const handleCartAmountChange = (amount: number) => () => {
    if(selectedValue === "b") {
      updateSettings({
        price : selling_price, qty: amount,color: color,final_code,material, name,final_name,  image, id, slug, rental_price, brand : "Mua"
      })
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: { price : selling_price,color: color,final_code,material, qty: amount, name,final_name,  image, id, slug, rental_price, brand : "Mua"},
      });
    }
   if(selectedValue === "a") {
    updateSettings({
      price: totalRent, qty: amount,color: color,final_code,material, name,final_name,  image, id, slug, brand:`Thuê ${selectVariants} tháng`
    })
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { price: totalRent, qty: amount,color: color,final_code,material, name,final_name,  image, id, slug, brand:`Thuê ${selectVariants} tháng`  },
    });
   }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Box  mb={6} gap={2} sx={{display:'flex', flexDirection:{md:'row', xs:'column-reverse'}}}>
          <Box sx={{display:'flex', justifyContent:{xs:'center',md:'flex-start'}, flexDirection:{md:'column',xs:'row'}, gap:1}} >
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
           <Box mx='auto' height={600} width={600} sx={{height:{md:600, xs:350, sm:700, lg:600},width:{md:600, xs:'100%', sm:700, lg:600},position:'relative'}}>
              <img
              alt={final_name}
              loading="eager"
              src={image && image[selectedImage] === null ? image[1] || image[2] || image[3] : image && image[selectedImage]}
              style={{ borderRadius: '8px',objectFit:'fill', width:'100%', height:'100%',}}
              />
              <Box sx={{position:'absolute',right:15, top:15, backgroundColor:'#F6F6F6', width:30, height:30, borderRadius:999, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <FavoriteBorderIcon sx={{  ":hover":{color:'pink', cursor:'pointer'}}}/>
              </Box>
           </Box>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <H1 >{final_name}</H1>
          <Typography fontSize={13} color='grey'>Mã sản phẩm: {final_code}</Typography>
          <Typography fontSize={13} py={1} color='grey'>Màu sắc: {color}</Typography>
          {/* <H5 color='grey'>Chất liệu : {material}</H5> */}
          {/* <Box sx={{borderRadius:9999, width:30,height:30, backgroundColor: finalColor , border:1,my:1}}></Box> */}
          <FlexBox alignItems="center" mb={1}>
            <Box fontWeight='bold'>Choose how you want it</Box>
            {/* <H6>Xiaomi</H6> */}
          </FlexBox>

         <div>
         <FlexBox alignItems="center" mb={2}>
            <Box sx={{ backgroundColor: selectedValue === 'a' ? '#FDF6F2' : '#EEEEEE', width: '100%',borderRadius:2  }}>
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
            <Box sx={{ backgroundColor:selectedValue === 'b' ? '#FDF6F2' : '#EEEEEE', width: '100%', borderRadius:2 }}>
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
            <H2 color='black' mb={0.5} lineHeight="1">
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
      </Container>
  );
};

export default ProductIntro;
