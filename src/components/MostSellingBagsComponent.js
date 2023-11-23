// components/MostSellingBagsComponent.js
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import data from '../data/most_selling_bags.json'; // Import your data from data.json

const MostSellingBagsComponent = () => {
  return (
    <div style={{ backgroundColor: '#F0F0F0', padding: '2rem' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Most Selling Bags
        </Typography>
        <Grid container spacing={2}>
          {data.mostSellingBags.map((bag, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={bag.name}
                  height="250"
                  image={bag.imageURL}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {bag.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {bag.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MostSellingBagsComponent;
