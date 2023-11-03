import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/SmallAboutme.scss'
const SmallAboutme = () => {
  return (
    <div>
        <div className='container_smallaboutme'>
            <div className="heading">
                <h1><span>#</span>about-me</h1>
            </div>
            <div className="hr"></div>
            <div></div>
        </div>
        <div className="grid_about">
            <div className="col1">
                <p>Hello, I'm Syed Talal Jilani!</p>
                <p>I am a self-taught SaaS developer and Penetration Tester residing in Multan, Pakistan. My expertise lies in creating responsive websites from the ground up and transforming them into modern, user-friendly web experiences. Additionally, I excel in mobile app development, catering to the needs of my clients.
</p>
<p>
For more than a year, I have been passionately channeling my creativity and knowledge into crafting impressive websites and applications. Working with diverse clients, I have assisted them in establishing a strong online presence. Continuously striving to stay updated with the latest technologies and frameworks, I am committed to enhancing my skills and delivering exceptional results for every project.

</p> 
  <Link to='/about'>Read more {'->'}</Link>
                
            </div>
            <div className="col2">
                <img src="/assets/boy2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SmallAboutme;