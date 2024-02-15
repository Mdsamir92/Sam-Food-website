// import React from 'react'
// import { Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import "./Footer.css"
// import InstagramIcon from "@mui/icons-material/Instagram"
// import LinkedInIcon from "@mui/icons-material/LinkedIn"
// import YouTubeIcon from "@mui/icons-material/YouTube"
// import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import LogoDevIcon from '@mui/icons-material/LogoDev';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom'


// function Footer() {

//   return (
//     <>
//       <Box sx={{ color: "white", p: 3, mt: 4, }}>
//         <div className='footer' style={{ color: "black" }}>
//           <div className='container'>
//             <div className='row'>
//               <div className=' col-md-6 col-lg-5 col-12 ft-1' >
//                 <p className='navbar-brand'> <span>SAM </span>DEVELOPER <LogoDevIcon /></p>
// {/* 
//                 <Box sx={{
//                   my: 2, '& svg': {
//                     fontSize: "40px",
//                     cursor: "pointer",
                    
//                     mr: 2,
//                   },
//                   "& svg:hover": {
//                     color: "blue",
//                     transform: "translateX(5px)",
//                     transition: "all 400ms"
//                   }
//                 }}>
//              */}
//              <Box className="social-icon">

//                   <a href="https://www.instagram.com/md_samir92">
//                     <InstagramIcon />
//                   </a>
//                   <a href="https://www.linkedin.com/in/mohammad-samir-536a05215">
//                     <LinkedInIcon />
//                   </a>

//                   <a href='https://www.youtube.com/channel/UCp5waAFnrZKIJSANfNuYvzw'>
//                     <YouTubeIcon />
//                   </a>

//                 </Box>
//               </div>


//               <div className='col-md-6 col-lg-3 col-12 ft-2'>
//                 <h3>Quick Links</h3>
//                 <ul className='mobile-menu'>

//                   <li>
//                     <Link style={{ color: "black" }} to={"/"} >Home</Link>
//                   </li>

//                   <li>
//                     <Link style={{ color: "black" }} to={"/menu"}>Menu</Link>
//                   </li>
//                   <li>
//                     <Link style={{ color: "black" }} to={"/contact"}>Contact</Link>
//                   </li>

//                 </ul>




//               </div>
//               <div className=' col-md-6 col-lg-4 col-12 ft-3'>
//                 <h3>Contact info</h3>
//                 <p><PhoneInTalkIcon /> +91 8910468443</p>
//                 <p>
//                   <MarkEmailReadIcon /> <a href="mailto:mdsamir13968@gmail.com"
//                     style={{ textDecoration: "none" }}>mdsamir13968@gmail.com</a>
//                 </p>

//               </div>
//             </div>
//           </div>
//         </div>
//         <Box sx={{ background: "white", display: "flex", justifyContent: "center", textAlign: "center", color: "blue" }}>
//           <Typography variant="h5" sx={{
//             "@media (max-width:600px)": {
//               fontSize: "1rem"
//             }
//           }}>
//             All rights reserved! &copy;Sam Developer..
//           </Typography>
//         </Box>

//       </Box>

//     </>

//   )
// }

// export default Footer


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
