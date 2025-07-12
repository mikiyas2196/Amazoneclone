import React from 'react'
import CarouselEffect from '../../components/carousel/CarouselEffect'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
import Layout from '../../components/Layout/Layout'

function Landing() {
  return (
       <Layout>
           <CarouselEffect />
           <Category />
           <Product />
        </Layout>
 
  )
}

export default Landing
