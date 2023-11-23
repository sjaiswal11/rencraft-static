// components/ProductShowcase.js
import React from 'react';
import Slider from 'react-slick';
import Button from '@mui/material/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import categories from '../data/categoryData.json';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000, // Adjust the slide duration in milliseconds
      };

  return (
    <div className="product-showcase">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.imageURL} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <Link to="/category" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Explore Other categories
          </Button>
      </Link>
      </div>
    </div>
  );
};

export default ProductShowcase;
