// VisionComponent.js
import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Container } from '@mui/material';

const VisionComponent = () => {
  const [visionData, setVisionData] = useState({});

  useEffect(() => {
    // Fetch vision data from the JSON file
    fetch('/visionData.json')
      .then((response) => response.json())
      .then((data) => setVisionData(data))
      .catch((error) => console.error('Error fetching vision data:', error));
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {visionData.text}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default VisionComponent;
