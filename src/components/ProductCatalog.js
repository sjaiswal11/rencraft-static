// ProductCatalog.js
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import ContactComponent from './ContactComponent'; // Import the ContactComponent

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [isContactOpen, setContactOpen] = useState(false);

  const handleContactOpen = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  useEffect(() => {
    // Fetch product data from the JSON file
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.imageUrl}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Price: ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body2" paragraph>
                  {product.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleContactOpen}>
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ContactComponent Dialog */}
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

export default ProductCatalog;
