import  React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function SocialNetwork() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{  backgroundColor:'transparent', borderRadius:999 , ":hover":{cursor:'pointer'}}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Nested List Items
    //     </ListSubheader>
    //   }
    >
  
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div"  disablePadding>
          <ListItemButton sx={{display:'flex', flexDirection:'column', borderRadius:3, backgroundColor:'transparent'}}>
           <a href='#'><img src='/assets/images/icon_phone.png' alt='call' style={{objectFit:'cover', width:'40px',marginBottom:'7px'}}/></a>
           <a href='#'><img src='/assets/images/zalo-icon.png' alt='zalo' style={{objectFit:'cover', width:'40px',marginBottom:'7px'}}/></a>
           <a href='https://www.facebook.com/kloudek'><img src='/assets/images/icon_messenger.png' alt='mess' style={{objectFit:'cover', width:'40px',marginBottom:'7px'}}/></a>
          </ListItemButton>
        </List>
      </Collapse>
        {open ?<img onClick={handleClick} src='/assets/images/icon_close2.png' alt='inbox' style={{objectFit:'cover', width:'50px',borderRadius:999}}/>
 :         <img onClick={handleClick} src='/assets/images/iconmess.jpg' alt='inbox' style={{objectFit:'cover', width:'50px',borderRadius:999}}/>
}
    </List>
  );
}