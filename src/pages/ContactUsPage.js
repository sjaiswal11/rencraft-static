// ContactUsPage.js
import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="inquiry-type-label">Inquiry Type</InputLabel>
                  <Select
                    labelId="inquiry-type-label"
                    id="inquiry-type"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <MenuItem value="general">General Inquiry</MenuItem>
                    <MenuItem value="sales">Sales Inquiry</MenuItem>
                    <MenuItem value="support">Support Inquiry</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsPage;
