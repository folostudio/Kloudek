import Link from "next/link";
import { FC, useEffect, useState, useMemo } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Container, Grid, Typography, Tab, Tabs, styled } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H5, H6 } from "components/Typography";
import useWindowSize from 'hooks/useWindowSize';
import { FlexBox, FlexRowCenter } from "../../components/flex-box";
import Carousel from "components/carousel/Carousel";
import Product from "models/Product.model";
import { currency } from "lib";
import productVariants from "data/product-variants";
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useSettings from "hooks/useSettings";
import ShopLayout1 from 'components/layouts/ShopLayout1';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppContext } from "contexts/AppContext";
import ProductDescription from 'pages-sections/product-details/ProductDescription';
import ProductReview from 'pages-sections/product-details/ProductReview';
//Back-End
import { arrayUnion, doc, setDoc, updateDoc, Timestamp, getDoc, getDocs, collection } from "firebase/firestore"; 
import { auth, db } from '../../../src/firebase';
// ================================================================
type ProductIntroProps = { product: any };
// ================================================================

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,

  "& .inner-tab": {
    minWidth: '50%',
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
}));

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const ProductIntro = () => {

  const { state, dispatch } = useAppContext();
  const [product, setProducts] = useState(state?.detail[0])
  const [selectedOption, setSelectedOption] = useState(0);
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [randomProducts, setRandomProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  console.log('state' ,state.allProduct);

  const sanpham = useMemo(async () => {
    try {
      const querySnapshot = await getDoc(doc(db, "rent_for_home", "living_room"));
      return querySnapshot.data();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (state.allProduct && Object.keys(state.allProduct).length > 0) {
          let newRandomProducts = [];
          let iterations = 0;
  
          // Iterate over each category in allProduct and select a random product
          for (const category of Object.keys(state.allProduct)) {
            // Ensure that only 4 items are selected
            if (iterations <= 4) {
              const randomProduct = getRandomItem(state.allProduct[category]);
  
              // Check if the image property is not null, undefined, or an empty string
              if (randomProduct.image && randomProduct.image[0]) {
                // Add relevant information to the new array
                newRandomProducts.push({
                  type: category,
                  final_code: randomProduct.final_code,
                  final_name: randomProduct.final_name,
                  image: randomProduct.image[0],
                  selling_price: randomProduct.selling_price,
                  rental_price: randomProduct.rental_price,
                });
  
                iterations++;
              }
            } else {
              break; // Break the loop if 4 items have been selected
            }
          }
  
          newRandomProducts = newRandomProducts.slice(0, 4);
          // Set the state with the new array
          setRandomProducts(newRandomProducts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); // Invoke the fetchData function
  
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const lastSpaceIndex = final_name.lastIndexOf(' ');
      const extractedSubstring = final_name.substring(lastSpaceIndex + 1);
      try {
        if (state.allProduct && Object.keys(state.allProduct).length > 0) {
          let filteredProducts = [];
          // Iterate over each category in allProduct and filter products based on final_name
          for (const category of Object.keys(state.allProduct)) {
            const categoryProducts = state.allProduct[category];
            // Filter products where final_name includes "Sofa" and image[0] is not null/undefined/empty
            const sofaProducts = categoryProducts.filter(
              product => product.final_name.includes(extractedSubstring) && product.image[0]
            );
            // Add filtered products to the array
            filteredProducts = [...filteredProducts, ...sofaProducts];
          }
          // Shuffle the array to get a random order
          const shuffledProducts = shuffleArray(filteredProducts);
          // Select the first 12 products
          const newFilterProducts = shuffledProducts.slice(0, 12);
          // Set the state with the new array
          setFilterProducts(newFilterProducts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();  // Invoke the fetchData function
  }, []);
  
  console.log(filterProducts);
  
  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (width < 500) setVisibleSlides(1.5);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  const handleOptionClick = (_, value: any) => setSelectedOption(value);

  const {settings, updateSettings} = useSettings()
// updateSettings({"a":3})
  useEffect(() => {
    const detailLocalStogare = localStorage.getItem('detail') && JSON.parse(localStorage.getItem('detail'))
    setProducts(detailLocalStogare)
  },[])
  
  const { kloudek_code, rental_price, name, image, selling_price, final_name, color,final_code,material } = product || [];
  const slug = final_name
    const id = kloudek_code
  const toLowerCaseColor = color?.toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/đ/g, 'd').replace(/Đ/g, 'D')
  // const finalColor = toLowerCaseColor === 'xanh' ? 'green' : toLowerCaseColor === 'do' ? 'red' : toLowerCaseColor === 'nau' ? 'brown' : toLowerCaseColor === 'den' ?
  // 'black' : toLowerCaseColor === 'trang' ? 'white' : toLowerCaseColor === 'xam' ? 'grey' : toLowerCaseColor === 'kem' ? '#FAF0E6' : toLowerCaseColor === 'da' ? '#FFFAF0' :
  // toLowerCaseColor === 'xanh ngoc' ? '#32CD32' : toLowerCaseColor === 'xanh bien' ? 'blue' : toLowerCaseColor === 'be' ? '#DDDDDD' : toLowerCaseColor === ' nau nhat' ? '#FFD39B' : ''
  const [selectedValue, setSelectedValue] = useState('a');
  const currencies = [
    { value: 1, label: '1 tháng'},
    { value: 2, label: '2 tháng'},
    { value: 3, label: '3 tháng'},
    { value: 4, label: '4 tháng'},
    { value: 5, label: '5 tháng'},
    { value: 6, label: '6 tháng'},
    { value: 7, label: '7 tháng'},
    { value: 8, label: '8 tháng'},
    { value: 9, label: '9 tháng'},
    { value: 10, label: '10 tháng'},
    { value: 11, label: '11 tháng'},
    { value: 12, label: '12 tháng'},
  ];
  const currencies1 = [
    { value: '1', label: 'Mua', }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

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
        payload: { price: totalRent || rental_price, qty: amount,color: color,final_code,material, name,final_name,  image, id, slug, brand:`Thuê ${selectVariants} tháng`  },
      });
    }
  };

  return (
    <ShopLayout1>
      <Box sx={{ my: 4, mx: 1 }}>
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
            <Typography fontSize={10} color='grey'>Mã sản phẩm: {final_code}</Typography>
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
                Thuê ngay với {currency(totalRent || selling_price)}đ - {selectVariants} tháng
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
              
              </Box>
                  </Box>
                </Box>
                </div>
              </Box>
            </FlexBox>
          </div>
            

            <Box pt={1} mb={3}>
              <H2 color='black' mb={0.5} lineHeight="1">
              {selectedValue === 'b' ? `Mua ${currency(selling_price)}đ` : `Thuê ${currency(totalRent || selling_price)}đ `}
              </H2>
              {/* <Box color="inherit">Stock Available</Box> */}
            </Box>

            {!cartItem?.qty ? (
              <Button
                variant="contained"
                onClick={handleCartAmountChange(1)}
                sx={{ mb: 4.5, px: "1.75rem", height: 40, color:'black', backgroundColor:'#EDD055',":hover":{backgroundColor:'pink'} }}
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

        <Container>
          <StyledTabs
            textColor="primary"
            value={selectedOption}
            indicatorColor="primary"
            onChange={handleOptionClick}
          >
            <Tab className="inner-tab" label="Chi tiết sản phẩm" />
            <Tab className="inner-tab" label="Why Kloudek?" />
          </StyledTabs>
          <Box mb={6}>
            {selectedOption === 0 && <ProductDescription />}
            {selectedOption === 1 && <ProductReview />}
          </Box>
        </Container>
        <Container>
          <H1 pb={3}>Sản phẩm gợi ý</H1>
          <Carousel
            infinite={true}
            visibleSlides={visibleSlides}
            totalSlides={4}
            autoPlay={false}
            spacing='30px'
          >
            {randomProducts.map((product, index) => (
              <Box key={index} sx={{ ":hover": { cursor: 'pointer' } }}>
                <img style={{ minHeight: 250, maxHeight: 250, maxWidth: '100%', objectFit: 'cover' }} src={product.image} alt={product.final_name} />
                <Typography fontSize={15} fontWeight={500} pt={1}>{product.final_name}</Typography>
                <Box py={1}>
                  <span style={{ fontWeight: 'bold' }}>{currency(product.rental_price)}đ/th</span> &nbsp;&nbsp;
                  <span>{currency(product.selling_price)}đ</span> mua
                </Box>
              </Box>
            ))}
          </Carousel>
        </Container>
      {/*  */}
      <Container sx={{py:6}}>
          <H1 pb={3}>Sản phẩm cùng loại</H1>
          <Carousel
  infinite={true}
  visibleSlides={visibleSlides}
  totalSlides={filterProducts.length}
  autoPlay={false}
  spacing='30px'
>
  {filterProducts.map((product, index) => {
    const firstValidImageIndex = product.image.findIndex(img => img && img !== '');

    return (
      <Box key={index} sx={{ ":hover": { cursor: 'pointer' } }}>
        {firstValidImageIndex !== -1 && (
          <img
            style={{ minHeight: 250, maxHeight: 250, maxWidth: '100%', objectFit: 'cover' }}
            src={product.image[firstValidImageIndex]}
            alt={product.final_name}
          />
        )}
        <Typography fontSize={15} fontWeight={500} pt={1}>{product.final_name}</Typography>
        <Box py={1}>
          <span style={{ fontWeight: 'bold' }}>{currency(product.rental_price)}đ/th</span> &nbsp;&nbsp;
          <span>{currency(product.selling_price)}đ</span> mua
        </Box>
      </Box>
    );
  })}
</Carousel>
        </Container>  

      </Box>
    </ShopLayout1>
  );
};

export default ProductIntro;
