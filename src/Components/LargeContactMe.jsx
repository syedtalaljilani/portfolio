import React from 'react'
import {Link} from 'react-router-dom'
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

             <Link className='icon' to='https://www.linkedin.com/in/syedtalaljilani/' target={'_blank'}>
                 <SiLinkedin size={30}/> <span>Linkedin</span>
             </Link>
         <Link  to='https://github.com/syedtalaljilani' target={'_blank'} className='icon'>
         <SiGithub size={30}/> <span>Github</span>
         </Link>
         <Link className='icon' to='https://www.instagram.com/syedtalaljilani/' target={"_blank"}>
         <SiInstagram size={30}/> <span>Instagram</span>
         </Link>
         <Link className='icon' to='https://twitter.com/syedtalalj' target={'_blank'}>
         <SiTwitter size={30}/> <span>Twitter</span>
         </Link>
         <Link className='icon' to='https://www.facebook.com/syedtalaljilani' target={'_blank'}>

         <SiFacebook size={30}/> <span>Facebook</span>
         </Link>
         <Link className='icon' to='https://www.tiktok.com/@syedtalaljilani' target={'_blank'}>
         <SiTiktok size={30}/> <span>Tiktok</span>
         </Link>
        </div>
    </>
  )
}

export default LargeContactme