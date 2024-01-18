import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { H1, H6 } from 'components/Typography'
import React from 'react'

const Delivers = () => {
  return (
    <Box pb={3} sx={{width:{md:'80vw', xs:'100%'}, mx:'auto'}}>
        <Grid mx='auto' py={6} container>
            <Grid item md={3} xs={6}>
                <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, alignItems:'center',justifyContent:{xs:'center',md:'normal'}, gap:{md:2,xs:0}, borderRight:{md:'none', xs:'1px solid gray'}, borderBottom:{md:'none', xs:'1px solid gray'}}}>
                <img src='/assets/images/truck.015e6f5a.svg' alt='car'/>
                <Typography fontWeight='bold' textAlign='center'>Fast, free delivery & assembly</Typography>
                </Box>
            </Grid>
            <Grid item md={3} xs={6}>
            <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, alignItems:'center',justifyContent:{xs:'center',md:'normal'}, gap:{md:2,xs:0},borderBottom:{md:'none',xs:'1px solid gray'}}}>
            <img style={{maxHeight:'100%'}} src='/assets/images/rent-or-buy.b752ba72.svg' alt='car'/>
            <Typography fontWeight='bold' textAlign='center'>Convenient rent or buy options</Typography>
            </Box>
            </Grid>
            <Grid item md={3} xs={6}>
            <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, alignItems:'center',justifyContent:{xs:'center',md:'normal'}, gap:{md:2,xs:0}, borderRight:{md:'none', xs:'1px solid gray'}}}>
            <img src='/assets/images/low-price.b230c486.svg' alt='car'/>
            <Typography fontWeight='bold' textAlign='center'>Low upfront costs for all rentals</Typography>
            </Box>
            </Grid>
            <Grid item md={3} xs={6}>
            <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, alignItems:'center',justifyContent:{xs:'center',md:'normal'}, gap:{md:2,xs:0}}}>
            <img src='/assets/images/buyout.a7117837.svg' alt='car'/>
            <Typography fontWeight='bold' textAlign='center'>Flexibility to buy out rental items later</Typography>
            </Box>
            </Grid>
        </Grid>
        <Grid container spacing={4} >
            <Grid item md={6}>
            <img src='assets/images/image.png' alt='delivers' width='100%' height='100%'/>
            </Grid>
            <Grid item md={6}sx={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%'}}>
           
                <H1 pb={2} pl={2}>Kloudek delivers to:</H1>
                <ul>
                    <li style={{listStyle:'inside', fontSize:20, paddingLeft:20}}>NYC area</li>
                    <li style={{listStyle:'inside', fontSize:20,paddingLeft:20}}>Southern California</li>
                    <li style={{listStyle:'inside', fontSize:20,paddingLeft:20}}>Seattle area</li>
                    <li style={{listStyle:'inside', fontSize:20,paddingLeft:20}}>San Francisco</li>
                </ul>
                <Box sx={{backgroundColor:'#F2F0ED', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', py:5, px:2, mt:2}}>
                    <Box textAlign='center'>
                    <span style={{fontWeight:'bold', fontSize:20}}>Enter your ZIP code </span>
                    <span style={{fontSize:20}}>to see if we deliver to your area or let us know where you’d like us to go next.</span>
                    </Box>
                    <form style={{paddingTop:3}}>
                    <TextField sx={{mx:2, backgroundColor:'white'}} id="outlined-basic" label="Zip code" variant="outlined" />
                    <Button size='small' variant='contained' color='dark' sx={{backgroundColor:'#ED653B', color:'white', borderRadius:999}}>Submit</Button>
                    </form>
                </Box>
             
            </Grid>
        </Grid>
    </Box>
  )
}

export default Delivers
