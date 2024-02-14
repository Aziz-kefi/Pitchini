"use client"
import React, { useState,useEffect } from 'react';
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
import  LogOutIcon  from '@mui/icons-material/Logout' ;
import WorkIcon from '@mui/icons-material/Work';
import {signIn, signOut, useSession,getProviders} from 'next-auth/react'


export default function TemporaryDrawerLogged() {
  const [alignment, setAlignment] = useState('left');
  const [state, setState] = useState({ right: false });
  const {data:session}= useSession();
  const [providers,setProviders]=useState(null);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="justify" key="justify">
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
  useEffect(()=>
  {
const setUpProviders=async ()=> {
  const response = await getProviders();
  setProviders(response);
}
setUpProviders();
  },[])
  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <MailIcon />
              </ListItemIcon>
              <ListItemText >Contact</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <HomeIcon />
              </ListItemIcon>
              <ListItemText >Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText >Discover</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <LocalPoliceIcon />
              </ListItemIcon>
              <ListItemText >Policies</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem  disablePadding>
            <ListItemButton className='outline_orange_btn_no_border'>
              <ListItemIcon>
                 <WorkIcon/>
              </ListItemIcon>
              <ListItemText >Workspace</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton  className='outline_red_btn_no_border' onClick={signOut}>
              <ListItemIcon>
                <LogOutIcon/>
              </ListItemIcon>
              <ListItemText  >Log out</ListItemText>
            </ListItemButton>
          </ListItem>   
      </List>
    </Box>
  );

  return (
    <div className='ml-4'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ToggleButtonGroup
        
            size="small"
            {...control}
            aria-label="small sizes"
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