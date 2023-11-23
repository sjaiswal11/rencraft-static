import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const BagsComponent = () => {
  const [bagsData, setBagsData] = useState([]);

  useEffect(() => {
    // Fetch bags data from the JSON file
    fetch('/productData.json')
      .then((response) => response.json())
      .then((data) => setBagsData(data))
      .catch((error) => console.error('Error fetching bags data:', error));
  }, []);

  return (
    <Container maxWidth="xl" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Elevate Your Style with Our Exquisite Collection of Bags
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {bagsData.map((bag) => (
          <Grid item key={bag.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={bag.title}
                height="200"
                image={bag.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {bag.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {bag.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <Link to="/products" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Explore Bags Collections
          </Button>
      </Link>
      </div>
    </Container>
  );
};

export default BagsComponent;
