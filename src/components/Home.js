import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';



function Home() {
  return (

<div >
    <div className="home">
    <div className="headerContainer">
  <h1> Unlock exclusive <br/> offers🎉🎊</h1>
  <p>Enjoy up to 50% off  </p>
  <p>on your first order</p>
  <Link to="/menu">
  <button>Order now </button>
  </Link>
  </div>
  </div>

  <div className='row  working-time'>
    <div className='col-md-3  container '>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>

    <p style={{fontWeight:"bold"}}>10.00 am - 11-pm</p>
    <p>Working hours</p>
    </div>
    <div className='col-md-3  container'>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
    <p style={{fontWeight:"bold"}}>Phone Number</p>
    <p>033-1800383</p>
    </div>
    <div className='col-md-3  container'>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
    <p style={{fontWeight:"bold"}}>Location</p>
    <p>Kolkata</p>
    </div>
  </div>
  
  <div className='row container '>
  <div className='col-md-4 burger '>
    <img src='https://img.freepik.com/premium-photo/closeup-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion_620624-6875.jpg'/>
  </div>
<div className='col-md-4 img-text'> 
<h3>Food Is An Important Part Of A Balanced Diet</h3>

</div>
</div>
</div>
  )
}

export default Home;
