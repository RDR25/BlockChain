import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ 
      bgcolor: '#00683E',
      height: 60
    }}>
      <Toolbar sx={{ 
        justifyContent: 'center',
        height: '100%',
        gap: 4
      }}>
        {['Home', 'About', 'Services', 'Contact', 'Help'].map((item) => (
          <Button 
            key={item}
            href={`#${item.toLowerCase()}`}
            sx={{
              color: '#d5c28f',
              fontWeight: 600,
              '&:hover': {
                color: '#00683E',
                bgcolor: '#d5c28f'
              }
            }}
          >
            {item}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
