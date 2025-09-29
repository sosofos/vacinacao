'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import {
  Menu,
} from '@mui/icons-material';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { text: 'Onde vacinar?', icon: <QuestionMarkIcon />, path: '/Local' },
    { text: 'Quem Deve se Vacinar', icon: <GroupIcon />, path: '/PublicoAlvo' },
    { text: 'Calendário de Vacinação', icon: <CalendarMonthIcon />, path: '/Calendario' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão para abrir sidebar */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1300,
          backgroundColor: 'white',
          color: 'black',
          border: '1px solidrgba(255, 255, 255, 0)',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Menu />
      </IconButton>
        
      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleSidebar}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div">
          ㅤ
          </Typography>
        </Box>
        
        <Divider />
        
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
              > 
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;