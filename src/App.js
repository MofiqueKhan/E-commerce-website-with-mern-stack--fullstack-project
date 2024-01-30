import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/navigation/navigation';
import HomePage from './customer/pages/homepage/homepage';
import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/product/product';
import ProductDetails from './customer/component/productDetail/productdetails';
import Cart from './customer/component/Cart/Cart';
import Checkout from './customer/component/Checkout/Checkout';
import Order from './customer/component/Order/Order';
import OrderDetails from './customer/component/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
      
    <div> 
      
    </div>
    
    </div>
  );
}

export default App;
