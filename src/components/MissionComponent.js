// MissionComponent.js
import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Container } from '@mui/material';

const MissionComponent = () => {
  const [missionData, setMissionData] = useState({});

  useEffect(() => {
    // Fetch mission data from the JSON file
    fetch('/missionData.json')
      .then((response) => response.json())
      .then((data) => setMissionData(data))
      .catch((error) => console.error('Error fetching mission data:', error));
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {missionData.text}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MissionComponent;
