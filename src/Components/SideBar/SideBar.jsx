import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, Divider, Typography } from '@mui/material';
import Import from '../../assets/import.svg';
import Bell from '../../assets/bell.svg';
import Logout from '../../assets/logout.svg';
import Settings from '../../assets/settings.svg';
import User from '../../assets/user.svg';
import Logo from '../../assets/trek.svg';
import Comments from '../../assets/comments.svg';
import People from '../../assets/people.svg';
import { display, height, minWidth, width } from '@mui/system';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const sidebarItems = [
    { id: 1, icon: User, title: 'Profile' },
    { id: 2, icon: People, title: 'Team' },
    { id: 3, icon: Comments, title: 'FeedBack' },
  ];

  const bottomItems = [
    { id: 4, icon: Settings },
    { id: 5, icon: Bell },
    { id: 6, icon: Logout },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          backgroundColor: '#1E1D5E', 
          color: '#FFFFFF',
          alignItems: 'center',
          // width:'5%'
        },
      }}
    >
      <List sx={styles.listContainer}>
        <img src={Logo} alt='logo' style={styles.logo} />
        <ListItem sx={{ justifyContent: 'center' }}>
          <Typography variant="subtitle2" sx={{ textAlign: 'center', fontSize:'12px', color:'#EBEBEB', paddingTop:0, paddingBottom:0 }}>
            V 1.0.02
          </Typography>
        </ListItem>
        <Divider sx={styles.divider} />

        {/* Sidebar Menu Items */}
        <Box sx={styles.menuContainer}>
          <Box>
            {sidebarItems.map((item, index) => (
              <ListItem
                key={item.id}
                button
                onClick={() => handleListItemClick(index)}
                sx={{
                  ...styles.listItem,
                  // backgroundColor: selectedIndex === index ? 'green' : 'transparent',
                }}
              >
                <ListItemIcon sx={styles.iconContainer} >
                  <Box component="img" src={item.icon} alt={item.title} sx={styles.iconImage} />
                </ListItemIcon>
                <Typography variant="caption">{item.title}</Typography>
              </ListItem>
            ))}
          </Box>

          <Divider sx={styles.divider} />

          {/* Bottom Section Icons */}
          <Box>
            {bottomItems.map((item, index) => (
              <ListItem
                key={item.id}
                button
                onClick={() => handleListItemClick(index + sidebarItems.length)}
                sx={{
                  ...styles.listItem,
                  // mb: index === bottomItems.length - 1 ? 2 : 0, // Add margin bottom to the last item
                  backgroundColor: selectedIndex === index + sidebarItems.length ? 'green' : 'transparent',
                }}
              >
                <ListItemIcon sx={styles.iconContainer}>
                  <Box component="img" src={item.icon} alt={item.title} sx={styles.iconImage} />
                </ListItemIcon>
              </ListItem>
            ))}
          </Box>
        </Box>
      </List>
    </Drawer>
  );
};

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: '25px',
    width: '25px',
    margin: 20,
  },
  divider: {
    width: '60%',
    mb: 2,
    color: 'white',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 12,
  },
  listItem: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'4%',
    gap: 0.5,
  },
  iconContainer: {
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundColor: '#30287E', 
    borderRadius: '4px',
    width:'32px',
    height:'32px',
    minWidth:0,
    marginTop:'20%'
    // padding: '32px',
  },
  iconImage: {
    width: '16px',
    height: '20px',
  },
};

export default Sidebar;
