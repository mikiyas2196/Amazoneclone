import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Payment from './Pages/Payment/Payment'
import SignIn from './Pages/Auth/SignIn'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'



function Routing() {
  return (
   <Router>
     <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/Orders' element={<Orders />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Payment' element={<Payment />}/>
        <Route path='/category/:category' element={<Results />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
     </Routes>
   </Router>
  )
}

export default Routing
