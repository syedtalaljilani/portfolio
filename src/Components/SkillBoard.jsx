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
      <div class="container_skill">
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
          <img src="assets/rectangle.png" alt="" />
        </div>
        <div className="col2">
          <div className="skillgrid">
            <div className="icon">
              <BiLogoFlutter size={70} color="white" />
              <p>Flutter</p>
            </div>
            <div className="icon">
              <BiLogoReact size={70} color="white" />
              <p>React</p>
            </div>
            <div className="icon">
              <BiLogoMongodb size={70} color="white" />
              <p>Mongodb</p>
            </div>
            <div className="icon">
              <BiLogoNodejs size={70} color="white" />
              <p>NodeJs</p>
            </div>
            <div className="icon">
              <BiLogoJavascript size={70} color="white" />
              <p>Javascript</p>
            </div>
            <div className="icon">
              <BiLogoPhp size={70} color="white" />
            </div>
            <div className="icon">
              <SiKalilinux size={70} color="white" />
              <p>Kali Linux</p>
            </div>
            <div className="icon">
              <BiLogoFirebase size={70} color="white" />
              <p>Firebase</p>
            </div>
            <div className="icon">
              <SiExpress size={70} color="white" />
              <p>Express Js</p>
            </div>
            <div className="icon">
              <SiCss3 size={70} color="white" />
                <p>CSS</p>
            </div>
            <div className="icon">
              <SiTailwindcss size={80} color="white" />
                <p>TailwindCSS</p>
            </div>
            <div className="icon">
              <SiMysql size={80} color="white" />
                <p>MySql</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillBoard;
