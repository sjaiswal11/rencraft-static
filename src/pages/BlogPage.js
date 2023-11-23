// BlogPage.js
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';

const BlogPage = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Discover the Latest Trends',
      image: '/blog/trend.jpg',
      content: 'Explore the hottest trends in the world of fashion and accessories.',
    },
    {
      id: 2,
      title: 'Unveiling Our Newest Collection',
      image: '/blog/new-launch.jpg',
      content: 'Get a sneak peek at our latest collection, featuring innovative designs and styles.',
    },
    // Add more blog posts as needed
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
      Discover Stories: Latest Trends, New Launches, and More
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                alt={post.title}
                height="140"
                image={post.image}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPage;
