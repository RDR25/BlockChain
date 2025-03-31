import React from 'react';
import { Container, Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(circle, #d5c28f 0%, #b99a45 100%)'
    }}>
      <Header />
      <Navbar />
      
      <Container sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        py: 8
      }}>
        <Grid container spacing={4} justifyContent="center">
          {/* User Login */}
          <Grid item xs={12} md={5}>
            <Paper elevation={6} sx={{ 
              p: 4,
              bgcolor: '#C7AE6A',
              borderRadius: 4
            }}>
              <Typography variant="h5" align="center" gutterBottom>
                User Login
              </Typography>
              <TextField
                fullWidth
                label="Username"
                margin="normal"
                InputLabelProps={{ sx: { color: '#00683E' } }}
                InputProps={{ sx: { color: '#00683E' } }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                InputLabelProps={{ sx: { color: '#00683E' } }}
                InputProps={{ sx: { color: '#00683E' } }}
              />
              <Button 
                fullWidth 
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: '#00683E',
                  color: '#d5c28f',
                  '&:hover': { bgcolor: '#003520' }
                }}
              >
                Login
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                Don't have an account?{' '}
                <Link href="/register/user" sx={{ color: '#00683E', fontWeight: 'bold' }}>
                  Register
                </Link>
              </Typography>
            </Paper>
          </Grid>

          {/* Official Login */}
          <Grid item xs={12} md={5}>
            <Paper elevation={6} sx={{ 
              p: 4,
              bgcolor: '#C7AE6A',
              borderRadius: 4
            }}>
              <Typography variant="h5" align="center" gutterBottom>
                Official Login
              </Typography>
              <TextField
                fullWidth
                label="Official ID"
                margin="normal"
                InputLabelProps={{ sx: { color: '#00683E' } }}
                InputProps={{ sx: { color: '#00683E' } }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                InputLabelProps={{ sx: { color: '#00683E' } }}
                InputProps={{ sx: { color: '#00683E' } }}
              />
              <Button 
                fullWidth 
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: '#00683E',
                  color: '#d5c28f',
                  '&:hover': { bgcolor: '#003520' }
                }}
              >
                Login
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                Don't have an account?{' '}
                <Link href="/register/official" sx={{ color: '#00683E', fontWeight: 'bold' }}>
                  Register
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
