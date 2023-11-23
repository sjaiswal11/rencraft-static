import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/background/bags_background1.jpg';

const MainComponent = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '100px', // Adjust as needed
  };

  const fullScreenStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '370px', // This sets the component to be the full height of the viewport
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={fullScreenStyle}>
      <Container maxWidth="lg" style={containerStyle}>
        <Typography variant="h3" component="h1" gutterBottom>
          Discover Our Stylish Bags
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Explore our collection of high-quality bags designed to suit your style and needs.
        </Typography>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Shop Now
          </Button>
      </Link>
      </Container>
    </div>
  );
};

export default MainComponent;
