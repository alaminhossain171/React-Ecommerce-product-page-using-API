import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom';

const Header = () => {


    return ( <>
        <div className="header">
           
 <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/" >EasyShop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/Products" className="nav-link">Products</Link>

        </li>

        <li class="nav-item">
          <Link to="/Contact" className="nav-link" href="#">Contact</Link>
          
        </li>

        <li class="nav-item">
          <Link className="nav-link btn btn-warning" href="#"><AddShoppingCartIcon className="mr-2 " /><b>
        0</b></Link>
           
        </li>
      </ul>
     
    </div>
  </div>
</nav>  </div>



</>


    )
}

export default Header
