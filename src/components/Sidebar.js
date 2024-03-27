import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Logo from './Logo';
const Sidebar = () => {
  const [open, setOpen] = useState(false); // State to manage dropdown visibility

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        // width: 240,
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Logo />
      {/* <Toolbar /> */}
      <h2>DASHBOARD</h2>
      <List>
      <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Analytics" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Finance" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Job Board" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
       
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Apps" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      
      </List>
      <h2>PAGES</h2>
      <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Help center" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="File manager" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
    </Drawer>
  );
};

export default Sidebar;
