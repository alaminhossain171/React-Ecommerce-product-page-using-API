import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';

const Footer = () => {
    return (
        <div className="page-footer font-small bg-dark text-white pt-5">


  <div className="container-fluid text-center text-md-left">


    <div className="row">


      <div className="col-md-6 mt-md-0 mt-3">

 
        <h5 className="text-uppercase">About us !</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor sed minus quia earum itaque ex autem facilis quaerat. Eos?</p>

      </div>
 

      <hr className="clearfix w-100 d-md-none pb-3" />

 
      <div className="col-md-3 mb-md-0 mb-3">

    
        <h5 className="text-uppercase">Follow us !</h5>

        <ul className="list-unstyled d-flex justify-content-around mb-3 ">
          <li>
            <a href="https://www.facebook.com/"><FacebookIcon /></a>
          </li>
          <li>
            <a href="https://mail.google.com/"><MailIcon /></a>
          </li>
          <li>
            <a href="https://mail.google.com/"><TwitterIcon /></a>
          </li>
          <li>
            <a href="https://www.youtube.com/"><YouTubeIcon /></a>
          </li>
        </ul>

      </div>
 


      <div className="col-md-3 mb-md-0 mb-3">


        <h5 className="text-uppercase">Download App</h5>

        <ul className="list-unstyled">
          <li className="d-inline">
            <a href="https://play.google.com/store/apps"><ShopIcon /></a>
          </li>
          <li className="d-inline">
            <a href="https://www.apple.com/shop"><AppleIcon /></a>
          </li>
    
        </ul>

      </div>
  

    </div>


  </div>
  


  <div className="footer-copyright text-center py-3">© 2021 Alamin
  </div>
 

</div>
    )
}

export default Footer
