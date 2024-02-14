
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import  HomeIcon  from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import LoginIcon from '@mui/icons-material/Login';
import PeopleIcon from '@mui/icons-material/People';
import Link from 'next/link'

export default function TemporaryDrawer() {
  const [alignment, setAlignment] = useState('left');
  const [state, setState] = useState({ right: false });

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="justify" key="justify" >
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key === 'Tab') || (event.key === 'Shift'))
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link href='/contact'>
      <ListItem  disablePadding>
      
            <ListItemButton>
              <ListItemIcon>
                 <MailIcon />
              </ListItemIcon>
              <ListItemText >Contact</ListItemText>
            </ListItemButton>
          
          </ListItem>
          </Link>
          <Link href='/'>
          <ListItem  disablePadding>
          
            <ListItemButton>
              <ListItemIcon>
                 <HomeIcon />
              </ListItemIcon>
              <ListItemText >Home</ListItemText>
            </ListItemButton>
          
          </ListItem>
          </Link>
          <Link href='/discover'>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText >Discover</ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link href='/policies'>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <LocalPoliceIcon />
              </ListItemIcon>
              <ListItemText >Policies</ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
      <Link href='/login'>
      <ListItem  disablePadding>
      
            <ListItemButton className='outline_orange_btn_no_border'> 
            
              <ListItemIcon>
                 <LoginIcon />
              </ListItemIcon>
              <ListItemText >Login</ListItemText>
              
            </ListItemButton>
          
          </ListItem>
          </Link>
          <Link href='/register'>
          <ListItem  disablePadding>
          
            <ListItemButton className='outline_orange_btn_no_border'>
              <ListItemIcon>
                 <PeopleIcon/>
              </ListItemIcon>
              <ListItemText >Join</ListItemText>
            </ListItemButton>
          
          </ListItem>   
          </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ToggleButtonGroup
           className='mb-2 mr-2'
            size="large"
            {...control}
            aria-label="Large sizes"
            onClick={toggleDrawer(anchor, true)}
          >
            {children}
          </ToggleButtonGroup>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}