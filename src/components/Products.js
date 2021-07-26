import React,{useState,useEffect} from 'react';
import '../index.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Products = () => {
    const [allProduct,setAllProduct]=useState([]);
    useEffect(function () {
        axios
          .get(`https://fakestoreapi.com/products`)
          .then(function (res) {
           setAllProduct(res.data);
          })
          .catch(function (err) {
            console.log(err);
          });
      }, []);








    return (
        <div className="container mt-5 p-5">
        <div className="row text-center">
<h1>Featured Products</h1>
<h3>Choose your favourite product</h3>


        </div>






        <div class="row mt-2">
  


     {allProduct.map(function(items){
                return <div key={items.id} className="col-md-3 col-sm-6 mt-3">
              
                  
 <div class="card">
 <img src={items.image} className="card-img-top  p-2" height="240px"  alt="" />
  <div class="card-body text-center">
    <h5 class="card-title"><b>Title: </b>{items.title}</h5>
    <p class="card-text">Category: {items.category}</p>
    <h4 className="card-text">Price: {items.price} Taka</h4>
    <Link to={`Products/${items.id}`} class="btn btn-success">Full Details </Link>
    
  </div>
</div>








                </div>
            })}
    
  </div>





           
        </div>
    )
}

export default Products
