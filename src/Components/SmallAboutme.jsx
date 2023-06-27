import React from 'react'
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
        <div className="grid">
            <div className="col1">
                <p>Hello, i’m Syed Talal Jilani!</p>
                <p>I’m a self-taught SaaS developer and Penetration Tester based in Multan, Pakistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                <p>
Transforming my creativity and knowledge into a websites and apps has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
<a href="">Read more {'->'}</a>
            </div>
            <div className="col2">
                <img src="assets/boy2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SmallAboutme;