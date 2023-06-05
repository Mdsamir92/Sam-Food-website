
import React from 'react'
import { Button } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import "./Contact.css"


function ContactUs() {
  return (


    <div style={{ display: "grid", placeItems: "center" }}>
      <div className='form-parent' style={{ margin: "80px", padding: "40px", width: "70%", marginTop: "80px",marginLeft:"20px", boxShadow: "-10px  10px  10px  5px grey", display: "grid", placeItems: "center" }}>

        <Form action="https://formspree.io/f/xeqdqalv" method="POST" className='form' >
          <div className='input-filed'>
            <h5>Send you Details</h5>
            <Form.Group as={Row} className="mb-3 " controlId="formHorizontalName" >
              <Form.Label column sm={8} >
                Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control name="name" required type="name" placeholder="Enter Name..." />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={8}>
                Email
              </Form.Label>
              <Col sm={8}>
                <Form.Control name="email" required type="email" placeholder="Enter Email..." />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={8}>
                Password
              </Form.Label>
              <Col sm={8}>
                <Form.Control name="password" required type="password" placeholder="Enter Password..." />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
              <Form.Label column sm={8}>
                Phone
              </Form.Label>
              <Col sm={8}>
                <Form.Control name="number" required type="number" placeholder=" Enter Number..." />
              </Col>
            </Form.Group>

            <textarea
              name="message"
              placeholder='Type here'
              cols="25"
                rows="8"
              autoComplete="off"
              required>
            </textarea>


            <div className='btn'>
              <Button type="submit" style={{ width: "60%" }}>SEND</Button>
            </div>
          </div>
        </Form>
        <br />
      </div>

       <div className='container'>
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
      </div> 

      <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8598836045694!2d88.29019411443356!3d22.546920939596063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279a4f4de010d%3A0x30e59320ebc2678a!2sDream%20Palace!5e0!3m2!1sen!2sin!4v1660218723995!5m2!1sen!2sin"
        width="100%" height="450" style={{ border: 0 }}
        allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>

    </div>


  )
}

export default ContactUs
