import axios from 'axios';
import React,{useState,useEffect,useContext} from 'react';
import { CartContext } from '../CartContext';





const Product = ({match}) => {
const {cart,setCart}=useContext(CartContext);




    const [oneProduct, setoneProduct] = useState([]);
useEffect(function(){
axios.get(`https://fakestoreapi.com/products/${match.params.id}`)
.then(function(res){
    setoneProduct(res.data);
})
.catch(function(err){
    console.log(err)
})
})

function addToCart(e,oneProduct){
    let _cart={...cart};
    if(!_cart.items){
        _cart.items={}
    }
    if(_cart.items[oneProduct.id]){
        _cart.items[oneProduct.id]+=1;
    }
    else{
        _cart.items[oneProduct.id]=1; 
    }
if(!_cart.totalItems){
    _cart.totalItems=0;
}
    _cart.totalItems+=1;
    setCart(_cart);
    



}
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-8">
                <h3>Product name: {oneProduct.title}</h3>
                <h4>Product Price: {oneProduct.price}</h4>
                <p><b>Product Details:</b> {oneProduct.description}</p>
               
            </div>
            <div className="col-md-4 text-center">
            <img src={oneProduct.image} height="300px" alt="" />

            

            </div>

            <div className="col-md-12 text-center">
            <button onClick={(e)=>{addToCart(e,oneProduct)}} className="btn btn-success my-5">Add to Chart </button>
            </div>
        </div>
        </div>
    )
}

export default Product
