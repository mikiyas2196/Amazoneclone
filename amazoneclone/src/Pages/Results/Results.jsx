import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import productURL from '../../Api/endpoints';
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard';
import classes from './Results.module.css'
import Loader from '../../components/Loader/Loader';


function Results() {
   
   const {category}=useParams();
   const [product,setproduct]= useState([]);
   const [isLoading,setIsLoading]= useState(false);

   useEffect(()=>{
       setIsLoading(true);
       axios.get(`${productURL}/products/category/${category}`)
      .then((result)=>{
        setproduct(result.data)
        setIsLoading(false)
      })
      .catch((err)=>{
        console.error('error',err);
        setIsLoading(false)
      })
   },[category])
   
   

   return (
    <Layout>
      {isLoading?(<Loader />):(<div className={classes.resultsContainer}>
        <div className={classes.categoryPath}>
          <h1>Results</h1>
          <p>category / {category}</p>
          <hr />
        </div>

        <section className={classes.productGrid}>
          {product.map((singleProduct) => (
            <ProductCard data={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      </div>)}  
    </Layout>
  );
}

export default Results
