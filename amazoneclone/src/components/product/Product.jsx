import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import Loader from '../Loader/Loader';

function Product() {
  const [products, setProduct] = useState([]);
  const [isLoading,setIsLoading]= useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then((result) => {
        setProduct(result.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false)
        
      });
  }, []);

  return (
    <>
    {isLoading?(<Loader />):(<div className={classes.productGrid}>
      {products.map((singleProduct) => (
        <ProductCard data={singleProduct} key={singleProduct.id} />
      ))}
    </div>)} 
    </>
    
  );
}

export default Product;
