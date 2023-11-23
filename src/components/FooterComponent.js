// components/FooterComponent.js
import React from 'react';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import { Room, Email, Phone, WhatsApp } from '@mui/icons-material';
import data from '../data/FooterData.json';

const FooterComponent = () => {
  const {
    address,
    socialMediaLinks,
    contactNumber,
    email,
    whatsappConnect,
  } = data;

  return (
    <div style={{ backgroundColor: '#333', color: '#fff', padding: '2rem 0', marginTop: '2rem' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Physical Address
            </Typography>
            <Typography>
              <Room /> {address}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <div>
              {Object.entries(socialMediaLinks).map(([platform, link]) => (
                <IconButton
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="success"
                >
                  <i className={`fab fa-${platform}`} />
                  {platform}
                </IconButton>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contact Number
            </Typography>
            <Typography>
              <Phone /> {contactNumber}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Typography>
              <Email /> {email}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              WhatsApp Connect
            </Typography>
            <Typography>
              <WhatsApp /> {whatsappConnect}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FooterComponent;
