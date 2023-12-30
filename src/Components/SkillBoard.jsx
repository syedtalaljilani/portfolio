import React from "react";
import "../styles/SkillBoard.scss";
import { SiCss3, SiExpress, SiKalilinux,SiMysql,SiTailwindcss } from "react-icons/si";
import {
  BiLogoFirebase,
  BiLogoFlutter,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoReact,
} from "react-icons/bi";
const SkillBoard = () => {
  return (
    <>
      <div className="container_skill">
        <div className="heading">
          <h1>
            <span>#</span>skills
          </h1>
        </div>
        <div className="hr"></div>
        <div></div>
      </div>
      <div className="skillboard">
        <div className="col1">
          <img src="/assets/rectangle.png" alt="" />
        </div>
        <div className="col2">
          <div className="skillgrid">
            <div className="icon">
              <BiLogoFlutter className="icons" size={70} color="white" />
              <p>Flutter</p>
            </div>
            <div className="icon">
              <BiLogoReact size={70} color="white" className="icons"/>
              <p>React</p>
            </div>
            <div className="icon">
              <BiLogoMongodb size={70} color="white" className="icons"/>
              <p>Mongodb</p>
            </div>
            <div className="icon">
              <BiLogoNodejs size={70} color="white" className="icons"/>
              <p>NodeJs</p>
            </div>
            <div className="icon">
              <BiLogoJavascript size={70} color="white" className="icons"/>
              <p>Javascript</p>
            </div>
            <div className="icon">
              <BiLogoPhp size={70} color="white" className="icons"/>
            </div>
            <div className="icon">
              <SiKalilinux size={70} color="white" className="icons"/>
              <p>Kali Linux</p>
            </div>
            <div className="icon">
              <BiLogoFirebase size={70} color="white" className="icons"/>
              <p>Firebase</p>
            </div>
            <div className="icon">
              <SiExpress size={70} color="white" className="icons"/>
              <p>Express Js</p>
            </div>
            <div className="icon">
              <SiCss3 size={70} color="white" className="icons"/>
                <p>CSS</p>
            </div>
            <div className="icon">
              <SiTailwindcss size={80} color="white" className="icons"/>
                <p>TailwindCSS</p>
            </div>
            <div className="icon">
              <SiMysql size={80} color="white" className="icons" />
                <p>MySql</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillBoard;
