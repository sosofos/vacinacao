import Image from "next/image";
import styles from "./page.module.css";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{ 
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ 
              mr: 2,
              color: 'black'
            }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              color: 'black'
            }}
          >
            
          </Typography>
          <Button 
            sx={{ 
              color: 'black',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}