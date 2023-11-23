// AboutUsPage.js
import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';
import VisionComponent from '../components/VisionComponent';
import MissionComponent from '../components/MissionComponent';

const AboutUsPage = () => {
  const [aboutUsData, setAboutUsData] = useState({});

  useEffect(() => {
    // Fetch about us data from the JSON file
    fetch('/aboutUsData.json')
      .then((response) => response.json())
      .then((data) => setAboutUsData(data))
      .catch((error) => console.error('Error fetching about us data:', error));
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="About Us Image"
              height="140"
              image={aboutUsData.image}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {aboutUsData.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                {aboutUsData.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
            <VisionComponent />
            <MissionComponent />
          </Card>
        </Grid>
    </Container>

  );
};

export default AboutUsPage;
