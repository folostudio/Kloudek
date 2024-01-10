import { FC, useState } from "react";
import { useSnackbar } from "notistack";
import Facebook from "@mui/icons-material/Facebook";
import Favorite from "@mui/icons-material/Favorite";
import { FaTiktok } from "react-icons/fa6";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Youtube from "@mui/icons-material/YouTube";
import { Box, Button, Chip, Container, Link, TextField, Typography } from "@mui/material";
import { FlexBox } from "components/flex-box";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FlagIcon from '@mui/icons-material/Flag';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { enqueueSnackbar } from "notistack";
import Image from "components/BazaarImage";
import emailjs from '@emailjs/browser';

const Footer: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    note: ''
  })
  const handleChange = (e: any) => {
    console.log(e.target.name, e.target.value);
    setForm({...form, [e.target.name] : e.target.value})
  }
  const handleSubmit = async () => {

    if (form.name == '') {
      enqueueSnackbar("Vui lòng nhập tên", { variant: "error" });
      return
    }
    if (form.phone == '') {
      enqueueSnackbar("Vui lòng nhập số điện thoại", { variant: "error" });
      return
    }
    if (form.email == '') {
      enqueueSnackbar("Vui lòng nhập Email", { variant: "error" });
      return
    }

    const emailContent = `
      Thông tin : 

        Tên: ${form.name}
        Mail: ${form.email}
        Sđt: ${form.phone}
        Nội dung: ${form.note}

    `;

    try {

      const response = await emailjs.send(
        'service_upk56lm',
        'template_i6wolhj',
        { message: emailContent },
        '8z8PUJiK1JUMJvk3u'
      );
      enqueueSnackbar("Thành công", { variant: "success" });
      
    } catch (error) {
      enqueueSnackbar("Thất bại", { variant: "error" });
      // console.log("Có lỗi khi gởi mail", error);
    }

  }
  
  return (
    <Container id='contact' sx={{ py: "4rem" }}>
      <FlexBox justifyContent="space-between" flexWrap="wrap">
        <FlexBox flexDirection='column' className="flex" >
          <Typography fontSize={25} my={3}>Thông tin liên hệ 
          {/* <Favorite
            fontSize="small"
            color="primary"
            sx={{ mx: "0.5rem", fontSize: "16px" }}
          /> */}
          {" "}</Typography>
        <Typography sx={{display: 'flex', alignItems: 'center'}} mb={1} fontSize={18}><SmartphoneIcon sx={{color:'#637381', marginRight: '10px'}}/> <a href='tel:+84979722865' style={{color:'gray'}} >0979722865</a> &nbsp;<a href='tel:+84559406607' style={{color:'gray'}} > - 0559406607</a></Typography>
        <Typography sx={{display: 'flex', alignItems: 'center'}} mb={1} fontSize={18}><FlagIcon sx={{color:'#637381', marginRight: '10px'}}/> <a style={{color:'gray', }} href="https://www.facebook.com/profile.php?id=61553916825958" target="_blank">Folo Studio</a></Typography>
        <Typography sx={{display: 'flex', alignItems: 'center'}} mb={1} fontSize={18}><AlternateEmailIcon sx={{color:'#637381', marginRight: '10px'}}/> <a style={{color:'gray'}} href="mailto:studiofolo@gmail.com">studiofolo@gmail.com</a></Typography>
        </FlexBox>
        <FlexBox sx={{display:'flex', flexDirection:'column'}}>
          <Typography fontSize={25} mt={3}>Thông tin tư vấn miễn phí</Typography>
          <Box
      component="form"
      sx={{display:'flex', flexDirection:'column'}}
      noValidate 
    >
      <TextField name="name" type="text" onChange={(e) => handleChange(e)} id="standard-basic" label="Tên" variant="standard" />
      <TextField name="email" type="email" onChange={(e) => handleChange(e)} id="standard-basic" label="Email" variant="standard" />
      <TextField name="phone" type="number" onChange={(e) => handleChange(e)} id="standard-basic" label="Số điện thoại" variant="standard" />
      <TextField multiline maxRows={3} name="note" type="text" onChange={(e) => handleChange(e)} id="standard-basic" label="Nội dung" variant="standard" />
      <Button onClick={handleSubmit} variant="outlined" color='paste'>Tư vấn miễn phí</Button>
    </Box>
        </FlexBox>
        <FlexBox className="flex" flexDirection='column'> 
         <Typography fontSize={25} my={3}>Kết nối với chúng tôi</Typography>
          <Typography  >
          {iconList.map((item, ind) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopenner"
              key={ind}
            >
              <item.icon
                color="inherit"
                sx={{
                  mx: "0.5rem",
                  fontSize: "1.25rem",
                  transition: "0.2s ease-in-out",
                  "&:hover": { color: "primary.main" },
                }}
              />
            </a>
          ))}
          <Link sx={{
                  mx: "0.5rem",
                  fontSize: "1.25rem",
                  transition: "0.2s ease-in-out",
                  color:'black',
                  "&:hover": { color: "primary.main" },
                }} href="https://www.tiktok.com/@folostudio?_t=8idOYBmhGSu&_r=1" target="_blank">
            {/* <Image width={18} sx={{marginLeft:"5px", opacity:'0.8',":hover":{background:'red'}}} src="/assets/tiktok.png" alt="logo"/> */}
            <FaTiktok size={18}/>
          </Link>
          
          </Typography>
        </FlexBox>
      </FlexBox>
    </Container>
  );
};

const iconList = [
  { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61553916825958" },
  { icon: Twitter, url: "#" },
  {
    icon: Youtube,
    url: "#",
  },
  { icon: Instagram, url: "#" },
  // { icon: FaTiktok, url: "#" },
];

export default Footer;
