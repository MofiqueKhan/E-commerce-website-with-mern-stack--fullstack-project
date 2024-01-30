import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homepage/homepage'
import Cart from '../customer/component/Cart/Cart'
import Navigation from '../customer/component/navigation/navigation'
import Footer from '../customer/component/Footer/Footer'
import Product from '../customer/component/product/product'
import ProductDetails from '../customer/component/productDetail/productdetails'
import Checkout from '../customer/component/Checkout/Checkout'
import Order from '../customer/component/Order/Order'
import OrderDetails from '../customer/component/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:leveltwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

            
      
      
      {/* <Order/> */}
      {/* <OrderDetails/> */}
        </Routes>

        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters