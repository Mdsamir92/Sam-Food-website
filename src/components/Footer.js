
import React from 'react'
import "./Footer.css"
import FastFoodIcon from "@mui/icons-material/Fastfood";

function Footer() {
  return (
    <div className='row mt-4 px-3 py-3 footer'  data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear">
    <div className='col-md-2'>
        <div className='footer-col'>
            <h5>Restaurants</h5> 
            <ul>
                <li>
                    <a href='#'>Kolkata</a>
                </li>
                <li>
                    <a href='#'>Hyedrabad</a>
                </li>
                <li>
                    <a href='#'>Delhi</a>
                </li>
                <li>
                    <a href='#'>Mumbai</a>
                </li>
                <li>
                    <a href='#'>Lucknow</a>
                </li>
            </ul>
        </div>
    </div>
    <div className='col-md-2'>
    <div className='footer-col'>
            <h5>Quick links</h5>
            <ul>
                <li>
                    <a href='#'>Parternship</a>
                </li>
                <li>
                    <a href='#'>Careers</a>
                </li>
                <li>
                    <a href='#'>Privacy</a>
                </li>
                <li>
                    <a href='#'>Security</a>
                </li>
                <li>
                    <a href='#'>About Us</a>
                </li>
            </ul>
        </div>

    </div>
    <div className='col-md-2'>
    <div className='footer-col'>
            <h5>Quick links</h5>
            <ul>
                <li>
                    <a href='#'>Blog</a>
                </li>
                <li>
                    <a href='#'>Sponsership</a>
                </li>
                <li>
                    <a href='#'>Collaborate</a>
                </li>
                <li>
                    <a href='#'>Program</a>
                </li>
                <li>
                    <a href='#'>Support</a>
                </li>
            </ul>
        </div>
    </div>
    <div className='col-md-3'>
    <div className='footer-col'>
            <h5>Contact Us</h5>
            <div className='footer-icons'>
            <ul>
                <li><a href="mailto:mdsamir13968@gmail.com">mdsamir13968@<i className="fa-regular fa-envelope"></i>.com</a></li>
           <li>+91 8910467866 <i className="fa-solid fa-phone "></i> </li>
           <li>Metiabruz,Kolkata 700024 <i className="fa-solid fa-location"></i></li>
           
            </ul>
            </div>
         
        </div>
    </div>
    <div className='col-md-3'>
   
    <div className='footer-col-last'>
    <p>Subscribe Our Newsletter</p>
   <form action="https://formspree.io/f/xeqdqalv" method="POST" className='form'>
    <input type="email" placeholder='Enter your email...' name='email'  required/>
    <button type="submit"><i  className="fa-solid fa-paper-plane"></i></button>
    </form>
  </div>

   </div>

<div className='container mt-3 row text-center '>

<div className='col-md-3 footer-logo'>
 <FastFoodIcon />   
</div>

    <div className='col-md-6 footer-sam' >
      
      <p>All rights reserved! ||  <span>Md Samir</span> || &copy;copyright 2024  </p>
    </div>
    <div className="col-md-3 social-icons">
    
        <a href="#"><i className="fa-brands fa-facebook"></i> </a>
        <a href="https://www.instagram.com/md_samir92"><i className="fa-brands fa-instagram"></i> </a>
        <a href="#"><i className="fa-brands fa-linkedin"></i> </a>
        <a href='https://www.youtube.com/channel/UCp5waAFnrZKIJSANfNuYvzw'><i className="fa-brands fa-youtube"></i> </a>
    </div>
</div>


    </div>
  )
}

export default Footer
