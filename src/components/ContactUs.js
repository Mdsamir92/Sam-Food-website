import React,{useState} from 'react'
import { Button } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import "./Contact.css"


function ContactUs() {


   const [input, setInput] = useState({
    email: "",
    password: "",
    password:"",
    number:"",
  });

  
  function handleLogin(e) {
    e.preventDefault();
  }
  
  return (




       <div>
        <div className='grid'>
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
    

    
<div  style={{ margin: "40px", padding: "30px ",display:"flex",alignItems:"center", justifyContent: "center", width: "50%", boxShadow: "-10px  10px  10px  5px grey", backgroundColor: "violet" }}>
<form action="https://formspree.io/f/xeqdqalv" method="POST" onSubmit={handleLogin}  >
<h5><mark>Submit Your Details</mark></h5>
  <label className='label'>Name</label><br/>
  <input  className="form-input" type="text" name= "name" value={input.name} placeholder='enter your name...' required
    onChange={(e) => setInput({
        ...input,
        [e.target.name]: e.target.value  })}/><br/>
  <label>Email</label><br/>
  <input className="form-input" type="email" name= "email" value={input.email} placeholder='enter your email...' required
      onChange={(e) => setInput({
        ...input,
        [e.target.name]: e.target.value  })}
  /><br/>
  <label>Password</label><br/>
  <input className="form-input" type="password" name= "password" value={input.password} placeholder='enter your password...' required
      onChange={(e) => setInput({
        ...input,
        [e.target.name]: e.target.value  })}
  /><br/>
  <label>Phone</label> <br/>
  <input className="form-input" type="number" name= "number" value={input.number} placeholder='enter your number...' required
      onChange={(e) => setInput({
        ...input,
        [e.target.name]: e.target.value  })}
       
  /> <br/>
  <br/>
       <textarea
              name="message"
              placeholder='Type here...'
              cols="18"
               rows="6"
              autoComplete="off"
              required>
            </textarea>
   <Button style={{marginTop:"10px",borderRadius:"10px",fontSize:"12px"}} type='submit' variant='warning'>Submit</Button>
</form>
</div>

      <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8598836045694!2d88.29019411443356!3d22.546920939596063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279a4f4de010d%3A0x30e59320ebc2678a!2sDream%20Palace!5e0!3m2!1sen!2sin!4v1660218723995!5m2!1sen!2sin"
        width="100%" height="450" style={{ border: 0 }}
        allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>

    </div>


  )
}

export default ContactUs
