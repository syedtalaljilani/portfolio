import React from 'react'
import { FiLinkedin,FiGithub } from "react-icons/fi";
import '../styles/SocialVertical.scss';
const SocialVertical = () => {
  return (
    <div>
        <div className="line">
        </div>
        <div className="social">
          <div className="linkedin">
              <FiLinkedin color='white' size={20}/>
          </div>
          <div className="linkedin">
              <FiGithub color='white' size={20}/>
          </div>
        </div>
    </div>
  )
}

export default SocialVertical;