import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonial() {

    const slider=useRef()
        let trX=0;

    const SlideForward = ()=>{
        if(trX > -50){
            trX-=25
        }
        slider.current.style.transform=`translateX(${trX}%)`;
    }
    const SlideBackward = ()=>{
        if(trX < 0){
            trX+=25
        }
        slider.current.style.transform=`translateX(${trX}%)`;
    }

  return (
    <div className='testimonial' name="testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick={SlideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={SlideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jack</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aperiam,
                         reprehenderit? Itaque saepe soluta
                          mollitia eius eos rem, accusantium omnis dolor.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jack</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aperiam,
                         reprehenderit? Itaque saepe soluta
                          mollitia eius eos rem, accusantium omnis dolor.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jack</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aperiam,
                         reprehenderit? Itaque saepe soluta
                          mollitia eius eos rem, accusantium omnis dolor.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jack</h3>
                            <span>Educity,USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Aperiam,
                         reprehenderit? Itaque saepe soluta
                          mollitia eius eos rem, accusantium omnis dolor.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
