import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import productURL from '../../Api/endpoints';
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/Loader/Loader';

function ProductDetail() {
   
  const {productId}=useParams();
  const [product,setproduct]= useState([]);
  const [isLoading,setIsLoading]= useState(false);

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productURL}/products/${productId}`)
    .then((result)=>{
      setproduct(result.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.error('error',err)
      setIsLoading(false)
    })
  },[])

  
  return (
    <Layout>
      {isLoading? (<Loader/>):(<ProductCard data={product} flex="true" proDesc="true"/>)} 
    </Layout>
   
  )
}

export default ProductDetail
