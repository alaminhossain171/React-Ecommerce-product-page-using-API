import axios from 'axios';
import React,{useState,useEffect} from 'react';






const Product = ({match}) => {





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
            <button className="btn btn-success my-5">Add to Cart </button>
            </div>
        </div>
        </div>
    )
}

export default Product
