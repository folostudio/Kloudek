import Link from "next/link";
import { NextPage } from "next";
import { Box, Button, Card, Divider, Grid, Radio, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import SEO from "components/SEO";
import { Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
import ProductCard7 from "components/product-cards/ProductCard7";
import CheckoutNavLayout from "components/layouts/CheckoutNavLayout";
import { CartItem, useAppContext } from "contexts/AppContext";
import countryList from "data/countryList";
import { currency } from "lib";
import { useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
const Cart: NextPage = () => {
  const [selectedValue, setSelectedValue] = useState('a');
  const { state } = useAppContext();
  const cartList: CartItem[] = state.cart;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const getTotalPrice = () =>
    cartList.reduce((accum, item) => accum + item.price * item.qty, 0);

  return (
    <CheckoutNavLayout>
      <SEO title="Cart" />

      <Grid container spacing={3}>
        {/* CART PRODUCT LIST */}
        <Grid item md={7} xs={12}>
          {cartList.map((item, index) => (
            <ProductCard7 key={index} {...item} />
          ))}
            <div onClick={() => setSelectedValue('a')}>
            <Box sx={{ backgroundColor: '#F0FFFF', width: '100%',borderRadius:5, outline: '1px solid blue', mb:2, ":hover":{cursor:'pointer'}  }}>
              <Box sx={{display:'flex', alignItems:'center', py:2}}>
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
              />
              <LocalShippingIcon/>
                <Box ml={2}>
                <Typography fontWeight={500}>COD</Typography>
              <Typography fontWeight={500}>Thanh toán tại điểm giao hàng</Typography>
                </Box>
              </Box>
              <div style={{display:selectedValue === 'a' ? 'block' : 'none', paddingLeft:'20px', paddingBottom:'5px'}}>
              <Typography fontWeight={500} mb={1}>- Quý khách thanh toán cho nhân viên giao nhận toàn bộ hoặc phần còn lại của giá trị đơn hàng đã mua (nếu đã đặt cọc)</Typography>
              <Typography fontWeight={500} mb={1}>- Hình thức thanh toán này chỉ thực hiện với các đơn hàng có địa chỉ giao hàng tại nội thành thành phố Hà Nội (trong phạm vi bán kính 30 km tính từ nơi mua hàng).</Typography>
              <Typography fontWeight={500} mb={1}>- Nếu địa điểm giao hàng ngay tại nơi thanh toán, nhân viên giao hàng của chúng tôi sẽ thu tiền khi giao hàng.</Typography>
              </div>
            </Box>
            </div>
            <div onClick={() => setSelectedValue('b')}>
            <Box sx={{ backgroundColor: '#F0FFFF', width: '100%',borderRadius:5, outline: '1px solid blue',mb:2,":hover":{cursor:'pointer'}  }}>
              <Box sx={{display:'flex', alignItems:'center', py:2}}>
              <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
              />
              <QrCodeScannerIcon/>
                <Box ml={2}>
                <Typography fontWeight={500}>Chuyển khoản</Typography>
              <Typography fontWeight={500}>Thanh toán chuyển khoản thủ công</Typography>
                </Box>
              </Box>
              <div style={{display:selectedValue === 'b' ? 'block' : 'none', paddingLeft:'20px',paddingBottom:'5px'}}>
              <Typography fontWeight={500} mb={1}>- Nếu địa điểm giao hàng là ngoại thành, ngoại tỉnh hoặc nội thành thành phố Hà Nội nhưng khác với địa điểm thanh toán (trong trường hợp Quý khách gửi quà, gửi hàng cho bạn bè, đối tác …) chúng tôi sẽ thu tiền trước 100% giá trị đơn hàng + phí vận chuyển theo cước phí tính trong chinh sách vận chuyển bằng phương thức chuyển khoản trước khi giao hàng</Typography>
              </div>
            </Box>
            </div>
           <div onClick={()=> setSelectedValue('c')}>
           <Box sx={{ backgroundColor: '#F0FFFF', width: '100%',borderRadius:5, outline: '1px solid blue',mb:2 ,":hover":{cursor:'pointer'} }}>
              <Box sx={{display:'flex', alignItems:'center', py:2}}>
              <Radio
                checked={selectedValue === 'c'}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'C' }}
              />
              <img width={30} src="/assets/images/vnpay.jpg" alt="vnpay"/>
                <Box ml={2}>
                <Typography fontWeight={500}>VNPAY QC</Typography>
              <Typography fontWeight={500}>Thanh toán tự động bằng vnpay qr</Typography>
                </Box>
              </Box>
              <div style={{display:selectedValue === 'c' ? 'block' : 'none', paddingLeft:'20px',paddingBottom:'5px'}}>
              <Typography fontWeight={500} mb={1}>- Chức năng này chưa thể sử dụng khi chưa có khoá api chính thức từ vnpay</Typography>
              </div>
            </Box>
           </div>
            <div onClick={() => setSelectedValue('d')}>
            <Box sx={{ backgroundColor: '#F0FFFF', width: '100%',borderRadius:5, outline: '1px solid blue',mb:2,":hover":{cursor:'pointer'}  }}>
              <Box sx={{display:'flex', alignItems:'center', py:2}}>
              <Radio
                checked={selectedValue === 'd'}
                onChange={handleChange}
                value="d"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'D' }}
              />
                 <img width={30} src="/assets/images/visa.jpg" alt="vnpay"/>
                <Box ml={2}>
                <Typography fontWeight={500}>Visa</Typography>
              <Typography fontWeight={500}>Thanh toán tự động bằng thẻ visa</Typography>
                </Box>
              </Box>
              <div style={{display:selectedValue === 'd' ? 'block' : 'none', paddingLeft:'20px',paddingBottom:'5px'}}>
              <Typography fontWeight={500} mb={1}>- Chức năng này chưa thể sử dụng</Typography>
              </div>
            </Box>
            </div>
           <div onClick={() => setSelectedValue('e')}>
           <Box sx={{ backgroundColor: '#F0FFFF', width: '100%',borderRadius:5, outline: '1px solid blue',mb:2 ,":hover":{cursor:'pointer'} }}>
              <Box sx={{display:'flex', alignItems:'center', py:2}}>
              <Radio
                checked={selectedValue === 'e'}
                onChange={handleChange}
                value="e"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'E' }}
              />
                 <img width={30} src="/assets/images/noidia.png" alt="vnpay"/>
                <Box ml={2}>
                <Typography fontWeight={500}>Thẻ nội địa việt nam</Typography>
              <Typography fontWeight={500}>Thanh toán tự đồng bằng thẻ ngân hàng nội địa</Typography>
                </Box>
              </Box>
              <div style={{display:selectedValue === 'e' ? 'block' : 'none', paddingLeft:'20px',paddingBottom:'5px'}}>
              <Typography fontWeight={500} mb={1}>- Ngân hàng NCB</Typography>
              <Typography fontWeight={500} mb={1}>- Số thẻ 9704198526191432198</Typography>
              <Typography fontWeight={500} mb={1}>- Tên chủ thẻ NGUYEN VAN A</Typography>
              </div>
            </Box>
           </div>
           <div onClick={() => setSelectedValue('f')}>
           <Box sx={{ backgroundColor: '#F0FFFF', width: '100%',borderRadius:5, outline: '1px solid blue',mb:2,":hover":{cursor:'pointer'}  }}>
              <Box sx={{display:'flex', alignItems:'center', py:2}}>
              <Radio
                checked={selectedValue === 'f'}
                onChange={handleChange}
                value="f"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'F' }}
              />
                 <img width={30} src="/assets/images/paypal.png" alt="paypal"/>
                <Box ml={2}>
                <Typography fontWeight={500}>Paypal</Typography>
              <Typography fontWeight={500}>Thanh toán tự động qua paypal</Typography>
                </Box>
              </Box>
              <div style={{display:selectedValue === 'f' ? 'block' : 'none', paddingLeft:'20px',paddingBottom:'5px'}}>
              <Typography fontWeight={500} mb={1}>- sb-yxqyo28237708@personal.example.com</Typography>
              <Typography fontWeight={500} mb={1}>- 5pjdVDU </Typography>
              </div>
            </Box>
           </div>
        </Grid>

        {/* CHECKOUT FORM */}
        <Grid item md={5} xs={12}>
          <Card sx={{ padding: 3 }}>
            <FlexBetween mb={2}>
              <Span color="grey.600">Total:</Span>

              <Span fontSize={18} fontWeight={600} lineHeight="1">
                {currency(getTotalPrice())}
              </Span>
            </FlexBetween>

            <Divider sx={{ mb: 2 }} />

            <FlexBox alignItems="center" columnGap={1} mb={2}>
              <Span fontWeight="600">Thông tin vận chuyển</Span>

              <Span
                p="6px 10px"
                fontSize={12}
                lineHeight="1"
                borderRadius="3px"
                color="primary.main"
                bgcolor="primary.light"
              >
                Note
              </Span>
            </FlexBox>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Họ và tên"
            />
            <TextField
              fullWidth
              type='number'
              size="small"
              variant="outlined"
              placeholder="Số điện thoại"
              sx={{my:1}}
            />
            <TextField
              fullWidth
              type='email'
              size="small"
              variant="outlined"
              placeholder="Email"
            />
            <TextField
              fullWidth
              sx={{my:1}}
              size="small"
              variant="outlined"
              placeholder="Địa chỉ"
            />
            <TextField
              variant="outlined"
              rows={5}
              placeholder="Ghi chú"
              fullWidth
              multiline
              sx={{ mb: 2 }}
            />

            <Divider sx={{ mb: 2 }} />

            <TextField
              fullWidth
              size="small"
              label="Voucher"
              variant="outlined"
              placeholder="Voucher"
            />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 4 }}
            >
              Apply Voucher
            </Button>

            <Divider sx={{ mb: 2 }} />

            {/* <Span fontWeight={600} mb={2} display="block">
              Shipping Estimates
            </Span> */}

            {/* <Autocomplete
              fullWidth
              sx={{ mb: 2 }}
              options={countryList}
              // getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Country"
                  variant="outlined"
                  placeholder="Select Country"
                />
              )}
            /> */}

            {/* <TextField
              select
              fullWidth
              size="small"
              label="State"
              variant="outlined"
              placeholder="Select State"
              defaultValue="new-york"
            >
              {stateList.map((item) => (
                <MenuItem value={item.value} key={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField> */}

            {/* <TextField
              fullWidth
              size="small"
              label="Zip Code"
              placeholder="3100"
              variant="outlined"
              sx={{ mt: 2 }}
            /> */}

            <Button variant="outlined" color="primary" fullWidth sx={{ my: 2 }}>
              Thanh toán
            </Button>

            {/* <Button
              fullWidth
              color="primary"
              href="/checkout"
              variant="contained"
              LinkComponent={Link}
            >
              Checkout Now
            </Button> */}
          </Card>
        </Grid>
      </Grid>
    </CheckoutNavLayout>
  );
};

const stateList = [
  { value: "new-york", label: "New York" },
  { value: "chicago", label: "Chicago" },
];

export default Cart;
