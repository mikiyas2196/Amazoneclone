import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import productURL from '../../Api/endpoints';
import ProductCard from '../../components/product/ProductCard';

function ProductDetail() {
   
  const {productId}=useParams();
  const [product,setproduct]= useState([]);

  useEffect(()=>{
    axios.get(`${productURL}/products/${productId}`)
    .then((result)=>(setproduct(result.data)))
    .catch((err)=>(console.error('error',err)))
  },[])

  
  return (
    <Layout>
     <ProductCard data={product} />
    </Layout>
   
  )
}

export default ProductDetail
