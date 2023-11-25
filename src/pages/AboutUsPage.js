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
                Welcome to Rencraft
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
              Crafting Customized Bags for Your Business Needs
              At Rencraft, we've mastered the art of translating vision into reality, 
              one stitch at a time. From humble beginnings to becoming a leading custom bag manufacturer, 
              our journey has been fueled by a relentless pursuit of excellence and a commitment to 
              delivering tailored solutions to businesses worldwide.

              <br />
              Born from a passion for craftsmanship and a dedication to meeting evolving industry demands, 
              Rencraft emerged as a small-scale custom bag manufacturer. Through innovation, resilience, 
              and unwavering dedication, we've evolved into a trusted partner for businesses seeking 
              bespoke bags that reflect their brand essence.
              <hr></hr>
              <br />
              <b>At Rencraft,</b> our mission is clear: to be the catalyst for your brand's 
              success by offering tailor-made bag solutions. We're not just manufacturers; 
              we're collaborators, understanding your unique requirements and translating 
              them into high-quality, customized bags that resonate with your brand identity.
              <br /><br/>
              <b>What Sets Us Apart?</b><br />
              Craftsmanship: Each bag crafted by Rencraft tells a unique story. Our skilled artisans 
              pay attention to every detail, ensuring unparalleled quality and durability in every stitch.
              <br /><br/>
              <b>Customization</b>: We thrive on turning your ideas into reality. 
              Whether it's for corporate events, retail, or promotional purposes, 
              our custom-designed bags cater to your specific needs.
              <br /><br/>
              <b>Timely Delivery</b>: We understand the significance of deadlines. 
              With our streamlined processes and commitment to punctuality, 
              we ensure on-time delivery without compromising on quality.
              <br /><br/>
              <b>Target Customers</b>:
              Our focus lies in serving businesses across industries. 
              From IT companies needing branded laptop bags to retail chains 
              requiring custom packaging solutions, we cater to diverse sectors. 
              Our clientele includes businesses seeking bags for events, 
              promotions, or selling purposes.
              <br /><br/>
              <b>Our Products </b> :
              Event Bags: Tailored bags that make a statement at corporate events, 
              trade shows, and conferences.
              <br /><br/>
              <b>Retail Bags</b>: Customized packaging solutions designed to elevate your brand's 
              retail experience.
              <br /><br/>
              <b>Branded Bags</b>: Personalized bags that serve as powerful marketing tools for 
              your business.
              <br /><br/>
              <b>Collaborate with Rencraft</b> :
              Partner with us to transform your bag ideas into tangible assets for your business. 
              We invite you to explore our expertise in manufacturing custom bags that align with 
              your brand's objectives.
              <br /><br/>
              <b>Contact Us</b> :
              Let's collaborate on crafting bespoke bags that elevate your brand's identity. 
              Reach out to us to discuss your requirements, and let's embark on this creative journey together.
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
