// components/ContactComponent.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the formData to your email or a server for processing
    // Implement your logic for sending the email here
    console.log('Form submitted:', formData);
    // You can use Axios, fetch, or other methods to send data to a server or email service.
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Why Choose Us
      </Typography>
      <Typography>
        We are dedicated to providing high-quality bags and excellent customer service.
        Choose us for your bag needs!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} style={{ marginTop: '1rem' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
      <br />
    </Container>
  );
};

export default ContactComponent;
