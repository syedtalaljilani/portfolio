import React from "react";
import "../styles/SkillBoard.scss";
import { SiExpress, SiKalilinux } from "react-icons/si";
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
              <BiLogoFlutter size={60} color="white" />
              <p>Flutter</p>
            </div>
            <div className="icon">
              <BiLogoReact size={60} color="white" />
              <p>React</p>
            </div>
            <div className="icon">
              <BiLogoMongodb size={60} color="white" />
              <p>Mongodb</p>
            </div>
            <div className="icon">
              <BiLogoNodejs size={60} color="white" />
              <p>NodeJs</p>
            </div>
            <div className="icon">
              <BiLogoJavascript size={60} color="white" />
              <p>Javascript</p>
            </div>
            <div className="icon">
              <BiLogoPhp size={60} color="white" />
            </div>
            <div className="icon">
              <SiKalilinux size={60} color="white" />
              <p>Kali Linux</p>
            </div>
            <div className="icon">
              <BiLogoFirebase size={60} color="white" />
              <p>Firebase</p>
            </div>
            <div className="icon">
              <SiExpress size={60} color="white" />
              <p>Express Js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillBoard;
