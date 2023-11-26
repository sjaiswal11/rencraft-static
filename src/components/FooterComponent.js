// components/FooterComponent.js
import React from 'react';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import { Room, Email, Phone } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
            RENCRAFT INDIA PVT. LTD.
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Phone /> {contactNumber}
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
              <Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Email /> {email}
                </div>
              </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              WhatsApp Connect
            </Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <WhatsAppIcon />
              <Typography>{whatsappConnect}</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FooterComponent;
