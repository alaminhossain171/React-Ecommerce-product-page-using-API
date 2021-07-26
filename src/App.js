
import Header from './components/Header';
import Slider from './components/Slider';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Product';


import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { CartContext } from './CartContext';
import { useState,useEffect } from 'react';


function App() {
const [cart,setCart]=useState({});
useEffect(() => {
const cart= window.localStorage.getItem('cart');
setCart(JSON.parse(cart));

}, []);
useEffect(() => {
  window.localStorage.setItem('cart',JSON.stringify(cart));
}, [cart])






  return (
    <BrowserRouter>
   
    <div className="App">
   <CartContext.Provider value={{cart,setCart}} >
      <Header />
     <Switch>
       
       <Route path="/" exact component={Slider} />
   
       <Route path="/Products" exact component={Products} />
      
       <Route path="/Contact" exact component={Contact} />
       <Route path="/Products/:id" exact component={Product} />

     </Switch>
     </CartContext.Provider>
     <Footer />
    
     </div>
     
    </BrowserRouter>
  
  );
}

export default App;
