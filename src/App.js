
import Header from './components/Header';
import Slider from './components/Slider';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Product';


import {BrowserRouter,Switch,Route} from 'react-router-dom'




function App() {






  return (
    <BrowserRouter>
   
    <div className="App">
  
      <Header />
     <Switch>
       
       <Route path="/" exact component={Slider} />
   
       <Route path="/Products" exact component={Products} />
      
       <Route path="/Contact" exact component={Contact} />
       <Route path="/Products/:id" exact component={Product} />

     </Switch>
   
     <Footer />
    
     </div>
     
    </BrowserRouter>
  
  );
}

export default App;
