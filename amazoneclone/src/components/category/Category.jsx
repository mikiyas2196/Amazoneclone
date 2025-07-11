import React from 'react'
import { categoryInfo } from './categoryInfo'
import CategoryCard from './CategoryCard'
import classes from "./category.module.css"


function Category() {
  return (
    <div className={classes.categoryContainer}>
      {categoryInfo.map((info)=>(<CategoryCard data={info} />))}
    </div>
  )
}

export default Category
