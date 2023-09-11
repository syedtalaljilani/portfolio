import React from 'react'
import SmallContactme from './SmallContactme'
import {SiLinkedin,SiGithub,SiTwitter,SiInstagram,SiFacebook,SiTiktok} from 'react-icons/si'
import '../styles/LargeContactMe.scss'
const LargeContactme = () => { 
  return (
    <>
     <div className='smallcontactcontainer'>
        <SmallContactme/>
        
     </div>
     <div className="mediacontainer">
        <div className="heading">
          <h1>
            <span>#</span>all-media
          </h1>
        </div>
        <div className="hr"></div>
        <div></div>
      </div>
      <div className="socialicon">
         <div className='icon'>
         <SiLinkedin size={30}/> <span>Linkedin</span>
         </div>
         <div className='icon'>
         <SiGithub size={30}/> <span>Github</span>
         </div>
         <div className='icon'>
         <SiInstagram size={30}/> <span>Instagram</span>
         </div>
         <div className='icon'>
         <SiTwitter size={30}/> <span>Twitter</span>
         </div>
         <div className='icon'>
         <SiFacebook size={30}/> <span>Facebook</span>
         </div>
         <div className='icon'>
         <SiTiktok size={30}/> <span>Tiktok</span>
         </div>
        </div>
    </>
  )
}

export default LargeContactme