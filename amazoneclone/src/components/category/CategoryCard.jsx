import React from 'react';
import classes from './categoryCard.module.css';
import { Link } from 'react-router-dom';


function CategoryCard({ data }) {
  return (
    <div className={classes.categoryCard}>
      


        <Link to={`/category/${data.category}`}>

          <h2>{data.category}</h2>
          <img src={data.image} alt={data.title} />
          <p>shop now</p>
          
        
        </Link>
      
    </div>
  );
}

export default CategoryCard;
