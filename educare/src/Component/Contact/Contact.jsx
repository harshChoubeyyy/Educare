import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

export default function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76e4dab2-89de-404f-b552-eaf636a3a5ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' name="contact">
     <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Fugit sed 
        officia quibusdam. Laborum dolorem, odit
         recusandae doloribus fugiat aspernatur harum.</p>
         <ul>
            <li> <img src={mail_icon} alt="" /> Xyz@gmail.com</li>
            <li> <img src={phone_icon} alt="" /> +1 7778787878787887787878787</li>
            <li> <img src={location_icon} alt="" /> 78 Goghira square  </li>
         </ul>
        </div> 
        <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required/>
          <label>write your Message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        </div> 
    </div>
  )
}
