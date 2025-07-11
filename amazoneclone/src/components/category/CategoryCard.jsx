import React from 'react';
import classes from './categoryCard.module.css';

function CategoryCard({ data }) {
  return (
    <div className={classes.categoryCard}>
      <a href="#">
        <h2>{data.category}</h2>
        <img src={data.image} alt={data.title} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
