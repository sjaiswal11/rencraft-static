// components/ProductPage.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Paper } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductCatalog from '../components/ProductCatalog';
import ContactComponent from '../components/ContactComponent';

const queryClient = new QueryClient();

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleContactClick = (productId) => {
    setSelectedProduct(productId);
  };

  const handleSendForm = (formData) => {
    // Implement logic to send the form data (product + user details) to your email
    console.log('Form data sent:', { productId: selectedProduct, ...formData });
    // Reset selected product after form submission
    setSelectedProduct(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Explore Our Collection: Unveiling Premium Products</Typography>
        </Toolbar>
      </AppBar>
      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        {selectedProduct ? (
          <ContactComponent onSend={handleSendForm} />
        ) : (
          <ProductCatalog onContactClick={handleContactClick} />
        )}
      </Paper>
    </QueryClientProvider>
  );
};

export default ProductPage;
