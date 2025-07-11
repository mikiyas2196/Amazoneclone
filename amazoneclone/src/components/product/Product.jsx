import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';

function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((result) => setProduct(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={classes.productGrid}>
      {products.map((singleProduct) => (
        <ProductCard data={singleProduct} key={singleProduct.id} />
      ))}
    </div>
  );
}

export default Product;
