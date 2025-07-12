import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './ProductCard.module.css';
import { Link } from 'react-router-dom';

function ProductCard({ data }) {
  const { image, title, rating, price,id } = data;

  return (
    <div className={classes.card}>
      <Link to={`product/${id}`} className={classes.imageLink}>
        <img src={image} alt={title} className={classes.image} />
      </Link>

      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.ratingRow}>
         <Rating value={rating?.rate || 0} precision={0.1} readOnly size="small" />
         <small className={classes.count}>({rating?.count || 0})</small>
        </div>

        <div className={classes.price}>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
