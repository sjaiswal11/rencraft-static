// PricingPage.js
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const PricingPage = () => {
  const [formData, setFormData] = useState({
    category: '',
    quantity: '',
    name: '',
    email: '',
    message: '',
  });

  const [pricingData, setPricingData] = useState([]);
  const [quotation, setQuotation] = useState(null);

  useEffect(() => {
    // Fetch pricing data from the JSON file
    fetch('./pricingData.json')
      .then((response) => response.json())
      .then((data) => setPricingData(data))
      .catch((error) => console.error('Error fetching pricing data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGetQuotation = () => {
    // Add your logic to generate quotation based on user-submitted data
    const { category, quantity, name, email, message } = formData;

    // Sample pricing model (replace with your actual pricing logic)
    const selectedCategory = pricingData.find((item) => item.category === category);
    const unitPrice = selectedCategory ? selectedCategory.price : 0;
    const total = unitPrice * parseInt(quantity, 10);

    setQuotation({
      category,
      quantity: parseInt(quantity, 10),
      unitPrice,
      total,
      name,
      email,
      message,
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Pricing
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {pricingData.map((item) => (
                      <MenuItem key={item.category} value={item.category}>
                        {item.category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  label="Quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleGetQuotation}
                  variant="contained"
                  color="primary"
                >
                  Get Quotation
                </Button>
              </Grid>
            </Grid>
          </form>
          <br />
        </Grid>
        {quotation && (
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Total Price</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Message</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{quotation.category}</TableCell>
                    <TableCell>{quotation.quantity}</TableCell>
                    <TableCell>${quotation.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>${quotation.total.toFixed(2)}</TableCell>
                    <TableCell>{quotation.name}</TableCell>
                    <TableCell>{quotation.email}</TableCell>
                    <TableCell>{quotation.message}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default PricingPage;
