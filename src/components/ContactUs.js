import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Contact.css"


function ContactUs() {
  return (
   
<div>

<div class="contact ">
    <h2>Get In Touch With Us</h2>
    <div class="form-container">
      <form action="https://formspree.io/f/xeqdqalv" method="POST" >
        <label for="name">Name</label><br/>
        <input type="text" placeholder="Enter name..." id="name" name="name" required autocomplete="off" />
        <p id="nameError" class="error"></p>
        <label for="email">Email</label><br/>
        <input type="email" placeholder="Enter email..." id="email" name="email" required autocomplete="off" /><br/>
        <p id="emailError" class="error"></p>
        <label for="number">Number</label><br/>
        <input type="number" id="number" placeholder="Enter number..." maxlength="10" name="number" required
          autocomplete="off" /><br/>
        <p id="numberError" class="error"></p>
        <textarea name="mesage" id="" placeholder="write message here..." cols="25" rows="6"></textarea> <br/>
        <button type="submit" class="btn">Submit</button>
      </form>

    </div>

  </div>

       <div >
        <div className='grid'  data-aos="zoom-in" data-aos-duration="1400"  data-aos-easing="linear">
          <div className="grid_card">
            <i> 💌 </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected </p>
            <p className="last_para">response time: 72 hours </p>
            <Link to="mailto:mdsamir13968@gmail.com">  Send Email <span>-&gt;</span></Link>
          </div>

          <div className="grid_card">
            <i> 📱 </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM — 6 PM ET</p>
            <p className="last_para">response time: 6 hours </p>
            <Link to="https://www.instagram.com/md_samir92"> Chat Now <span>-&gt;</span></Link>
          </div>
          <div className="grid_card">
            <i>  ⌨</i>
            <h2>Community</h2>
            <p>Monday to Friday Expected </p>
            <p className="last_para">response time: 72 hours </p>
            <Link to="mailto:mdsamir13968@gmail.com">  Ask the community <span>-&gt;</span></Link>
          </div>
        </div>


    
      <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8598836045694!2d88.29019411443356!3d22.546920939596063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279a4f4de010d%3A0x30e59320ebc2678a!2sDream%20Palace!5e0!3m2!1sen!2sin!4v1660218723995!5m2!1sen!2sin"
        width="100%" height="450" style={{ border: 0 }}
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>

    </div>

</div>

  )
}

export default ContactUs




