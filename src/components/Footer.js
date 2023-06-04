import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import "./Footer.css"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <>
   <Box className="footer-m" sx={{bgcolor:"gold",color:"white",p:3 ,mt:4,}}>
    <div className='footer' style={{color:"black"}}>
    <div className='container'>
      <div className='row'>
      <div className=' col-md-6 col-lg-5 col-12 ft-1' >
        <p className='navbar-brand'> <span>SAM </span>DEVELOPER <LogoDevIcon/></p>
        
         <Box sx={{my:2, '& svg':{
  fontSize:"40px",
  cursor:"pointer",
  color:"white",
  mr:2,
},
"& svg:hover":{
color:"blue",
transform:"translateX(5px)",
transition:"all 400ms"
}}}>

<a href="https://www.instagram.com/md_samir92">
<InstagramIcon/>
</a>
  <a href="https://www.linkedin.com/in/mohammad-samir-536a05215">
 <LinkedInIcon/>
 </a>
  
  <a href='https://www.youtube.com/channel/UCp5waAFnrZKIJSANfNuYvzw'>
  <YouTubeIcon/>
  </a>

</Box>    
      </div>


      <div className='col-md-6 col-lg-3 col-12 ft-2'>
        <h3>Quick Links</h3>
        <ul className='mobile-menu'>
     
        <li>
          <Link  style={{color:"black"}}  to={"/"} >Home</Link>
        </li>
    
        <li>
          <Link  style={{color:"black"}}  to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link   style={{color:"black"}} to={"/contact"}>Contact</Link>
        </li>
       
      </ul>



                
      </div>
      <div className=' col-md-6 col-lg-4 col-12 ft-3'>
      <h3>Contact info</h3>
      <p><PhoneInTalkIcon/> +91 8910468443</p>
     <p>
     <MarkEmailReadIcon/> <a href="mailto:mdsamir13968@gmail.com"
        style={{textDecoration:"none"}}>mdsamir13968@gmail.com</a>
      </p>
      
      </div>
      </div>
    </div>
    </div>
 <Box sx={{ background:"white",display:"flex", justifyContent:"center" ,textAlign:"center",color:"blue"}}>
   <Typography variant="h5" sx={{"@media (max-width:600px)":{
    fontSize:"1rem"
   }}}>
    All rights reserved! &copy;Sam Developer..
   </Typography>
   </Box>

   </Box>

    </>
    
  )
}

export default Footer

