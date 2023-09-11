import React from 'react'
import '../styles/SmallContactme.scss';
import {HiOutlineMail} from 'react-icons/hi'

import {SiWhatsapp} from 'react-icons/si'
const SmallContactme = () => {
    const sendEmail = (e) => {
        const email = 'syedtalaljilani.dev@gmail.com';
        window.location.href = `mailto:${email}`;
        e.preventDefault();
      };
      const sendWhatsapp = (e) => {
        const whatsapplink = 'https://wa.me/923056892753';
        window.location.href = `${whatsapplink}`;
        e.preventDefault();
      };
  return (
    <>
     <div className='SmallContactContainer'>
     <div className="heading">
          <h1>
            <span>#</span>contacts
          </h1>
        </div>
        <div className="hr"></div>
        <div></div>
     </div>
     <div className="gridcontactme">
            <div className='SmallContactContent'>
                <p>I’m interested in freelance opportunities. 
                   
                   However, if you have other request or question,
                  don’t hesitate to contact me</p>
            </div>
            <div className='MessageMe'>
                <div className='MessageContainer'>
                    <h3>Message me here</h3>
                    <button name='whatsapp' onClick={sendWhatsapp}><SiWhatsapp size={30}/><p>WhatsApp</p></button>
                    <button name='email' onClick={sendEmail}>
      <HiOutlineMail size={30} />
      <p>Email</p>
    </button>

                </div>
            </div>
        </div>
    </>
  )
}

export default SmallContactme