import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import {
    Button, 
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import ContactComponent from '../components/ContactComponent';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [isContactOpen, setContactOpen] = useState(false);

  const handleContactOpen = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  useEffect(() => {
    // Fetch categories data from the JSON file
    fetch('/categoryData.json')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories data:', error));
  }, []);

  return (
    <Container maxWidth="xl">
      {categories.map((category) => (
        <div key={category.id}>
          <div style={{ width: '100%', height: '700px', overflow: 'hidden', margin: '20px 0' }}>
          <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
            {category.category}
          </Typography>
          <Typography variant="body1" align="center" style={{ marginBottom: '20px' }}>
            {category.description}
          </Typography>
          <div align="center">
            <img src={category.image} alt={category.category} style={{ width: 'auto', height: '600px' }} />
          </div>
          </div>
          <hr color='blue'></hr>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleContactOpen}>
            Contact Us
          </Button>
      </div>

      <Dialog open={isContactOpen} onClose={handleContactClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <ContactComponent />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContactClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CategoryPage;
