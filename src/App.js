import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/navigation/navigation';
import HomePage from './customer/pages/homepage/homepage';
import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/product/product';
import ProductDetails from './customer/component/productDetail/productdetails';
import Cart from './customer/component/Cart/Cart';
import Checkout from './customer/component/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation/>
    <div> 
      {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      <Checkout/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
