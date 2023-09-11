import React from 'react';
import Header from '../Components/Header';
import SocialVertical from '../Components/SocialVertical';
import LargeContactme from '../Components/LargeContactMe';
import Footer from '../Components/Footer';
const Contact = () => {
  return (
    <div className='container'>
      <div className="col1">
         <SocialVertical/>
      </div>
      <div className="col2">
         <Header />
         <div className="page_title">
         <h1><span>/</span>contact-me</h1>
         <p>Who am I?</p>
         </div>
         <div className='large_contactme'>
            <LargeContactme/>
         </div>
         <div className="footer">
          <Footer/>
        </div>
      </div>
      <div className="col3">
      </div>
    </div>
  )
}

export default Contact;