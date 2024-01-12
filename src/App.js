import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/navigation/navigation';
import HomePage from './customer/pages/homepage/homepage';
import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/product/product';

function App() {
  return (
    <div className="">
      <Navigation/>
    <div> 
      {/* <HomePage/> */}
      <Product/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
