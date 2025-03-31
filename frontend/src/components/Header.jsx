// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LandscapeIcon from '@mui/icons-material/Landscape';

export default function Header() {
  return (
    <AppBar position="static" sx={{ 
      bgcolor: '#003520',
      height: 100
    }}>
      <Toolbar disableGutters sx={{ 
        px: 4,
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center' // Vertical centering
      }}>
        {/* Left Side */}
        <Box display="flex" alignItems="center" gap={2}>
          <LandscapeIcon sx={{
            fontSize: 40,
            background: 'linear-gradient(45deg, #b99a45, #d5c28f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }} />
          <Typography variant="h4" sx={{
            background: 'linear-gradient(45deg, #b99a45, #d5c28f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            fontSize: '2rem'
          }}>
            E-Land Records
          </Typography>
        </Box>

        {/* Right Side */}
        <Typography variant="h4" sx={{
          background: 'linear-gradient(45deg, #b99a45, #d5c28f)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          fontSize: '2rem',
          marginLeft: 'auto'
        }}>
          Land Record Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
