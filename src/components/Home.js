import React, { useState, useEffect } from 'react'
import { Img } from './HomeImg'
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {


  const [activeImg, setActiveImg] = useState(0);

  const handlePrevClick = () => {
    setActiveImg(!activeImg ? Img.length - 1 : activeImg - 1)
  }

  const handleNextClick = () => {
    setActiveImg((activeImg + 1) % Img.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeImg]);



  return (


    <div>
      <div className="home" data-aos="flip-right" data-aos-duration="1000"  data-aos-easing="linear">
        <button className='slider-l' onClick={handlePrevClick} >&lt;</button>
        <img src={Img[activeImg]} alt="wallpaper" />
        <button className='slider-r' onClick={handleNextClick} >&gt;</button>
      </div>


      <div className="text-center mt-5"  data-aos="fade-down" data-aos-duration="1000"  data-aos-easing="linear">
        <h2>What's on your mind?</h2>
      </div>
      <div className='container row  dishes brands-row'  data-aos="fade-up" data-aos-duration="1200"  data-aos-easing="linear">
        <div className='col-md-2'>
        <Link to="/menu">
          <img height={150} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png' />
        </Link>
        </div>
        <div className='col-md-2'>
        <Link to="/menu">
          <img height={150} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png' />
        </Link>
        </div>
        <div className='col-md-2'>
        <Link to="/menu">
          <img height={150} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png' />
          </Link>
        </div>
        <div className='col-md-2'>
        <Link to="/menu">
          <img height={150} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png' />
          </Link>
        </div>
        <div className='col-md-2'>
        <Link to="/menu">
          <img height={150} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png' />
          </Link>
        </div>
        <div className='col-md-2'>
        <Link to="/menu">
          <img height={150} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png' />
          </Link>
        </div>
      

      </div>

      {/* our service  */}
      <div className="text-center mt-5" data-aos="fade-down" data-aos-duration="1000"  data-aos-easing="linear">
        <h1>About Us</h1>
      </div>
      <div className="about"  data-aos="flip-up" data-aos-duration="1200"  data-aos-easing="linear">

        <div className="about-child">
          <h1>👨‍🍳</h1>
          <h2>100+</h2>
          <p>Master Chiefs</p>
        </div>
        <div className="about-child">
          <h1>🏍</h1>
          <h2>24 Hours</h2>
          <p>fastest Delivery</p>
        </div>
        <div className="about-child">
          <h1>🥧</h1>
          <h2>100% </h2>
          <p>Hygiene Food</p>
        </div>
        <div className="about-child">
          <h2>📞</h2>
          <h1>24 X 7</h1>
          <p>Technical Support</p>
        </div>
      </div>


      <div className='row container home-sec2'>
        <div className='container col-md-4 section-img' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img height={400} src='https://i.pinimg.com/564x/fd/b4/7d/fdb47d9d3bfca137866cd9ee881a0117.jpg' />
        </div>
        <div className='col-md-4 img-text' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <h3>YOUR DELICIOUS FOOD HERE</h3>
          <p>At <span>Sam</span> Restaurant, Having a tour around the restaurant, I noticed that the workers are friendly and able to serve the large number of customers. The guests are satisfied with the services they get from this restaurant. The staff does not ignore calls and they talk in a professional and courteous manner. Listening to the staff responding to the guests over the phone shows that the staff has respect for the customers</p>
        </div>

      </div>

      <div className='row container mt-4 home-sec2 '>

        <div className='col-md-4 img-text' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <h3>YOUR DELICIOUS FOOD HERE</h3>
          <p>At <span>Sam</span> Restaurant, Having a tour around the restaurant, I noticed that the workers are friendly and able to serve the large number of customers. The guests are satisfied with the services they get from this restaurant. The staff does not ignore calls and they talk in a professional and courteous manner. Listening to the staff responding to the guests over the phone shows that the staff has respect for the customers</p>
        </div>
        <div className='container col-md-4 section-img2 ' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img height={400} src='https://i.pinimg.com/564x/8a/b0/9b/8ab09b86d26a0a15c902ad6b69baf90d.jpg' />
        </div>

      </div>


 
        <div className="text-center mt-5 brand-title  mb-5" data-aos="fade-down" data-aos-duration="1000"  data-aos-easing="linear">
        <h2 class="h5-title">Trusted by 50+ Companies</h2>
      </div>
      <div className='container row brands-row' data-aos="zoom-in" data-aos-duration="1400"  data-aos-easing="linear">
        <div className='col-md-2 companies  '>
       
        <img height={150} src="./images/brands/b1.png" alt="" />
       
        </div>
        <div className='col-md-2 companies '>
       
        <img height={150} src="./images/brands/b2.png" alt="" />       
        </div>
        <div className='col-md-2 companies '>
       
        <img height={150} src="./images/brands/b3.png" alt="" />         
        </div>
        <div className='col-md-2 companies '>
        <img height={150} src="./images/brands/b4.png" alt="" />           
        </div>
        <div className='col-md-2 companies '>
        <img height={150} src="./images/brands/b5.png" alt="" />           
        </div>
        <div className='col-md-2 companies '>
        <img height={150} src="./images/brands/b6.png" alt="" />           
        </div>
      

      </div>

    </div>
  )
}

export default Home
