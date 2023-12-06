import React,{useState,useEffect} from 'react'
import { Img } from './HomeImg'
import "./Home.css";

function Home() {


  const [activeImg,setActiveImg] = useState(0);

  const handlePrevClick = ()=>{
      setActiveImg(!activeImg ? Img.length -1 :activeImg -1)}

  const handleNextClick = () =>{
      setActiveImg((activeImg +1 ) % Img.length) }


  useEffect(() =>{
    const timer =   setTimeout(()=>{
       handleNextClick();
      },2000);
      return  () => {
          clearTimeout(timer)
      }
  },[activeImg]);
  return (

<div >
        <div className="home">
       <svg onClick= {handlePrevClick} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        <img  src={Img[activeImg]} alt="wallpaper" />
        <svg onClick={handleNextClick }  xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>  
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
<h3>Food Is An Important Part of Balanced Diet</h3>

</div>
</div>
</div>
  )
}

export default Home;
