// components/ServiceComponent.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business'; // Example icon, you can choose your own

const ServiceComponent = () => {
  return (
    <Paper elevation={3} style={{ padding: '2rem' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <BusinessIcon fontSize="large" />
            <Typography variant="h6" gutterBottom>
              Custom Bag Customization
            </Typography>
            <Typography>
              We specialize in customizing bags based on industry requirements. Our team will work closely with you to design and produce bags that meet your unique needs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <BusinessIcon fontSize="large" />
            <Typography variant="h6" gutterBottom>
              Bulk Orders
            </Typography>
            <Typography>
              We welcome bulk orders and offer competitive pricing for large quantities. Whether you need bags for events, promotions, or resale, we've got you covered.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default ServiceComponent;
