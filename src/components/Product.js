// components/Product.js
import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const Product = ({ id, name, price, image, onContactClick }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image} // Provide the image URL here
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <Button onClick={() => onContactClick(id)}>Contact</Button>
      </CardContent>
    </Card>
  );
};

export default Product;
