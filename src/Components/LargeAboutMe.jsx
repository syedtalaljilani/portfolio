import React from "react";
import "../styles/SmallAboutme.scss";
import SkillBoard from "../Components/SkillBoard";
import JobExperience from "./JobExperience";
const LargeAboutme = () => {
  return (
    <div>
      <div className="container_smallaboutme">
        <div className="heading">
          <h1>
            <span>#</span>about-me
          </h1>
        </div>
        <div className="hr"></div>
        <div></div>
      </div>
      <div className="grid_about">
        <div className="col1">
          <p>Hello, I'm Syed Talal Jilani!</p>
          <p>
            I am a self-taught SaaS developer and Penetration Tester residing in
            Multan, Pakistan. My expertise lies in creating responsive websites
            from the ground up and transforming them into modern, user-friendly
            web experiences. Additionally, I excel in mobile app development,
            catering to the needs of my clients.
          </p>
          <p>
            For more than a year, I have been passionately channeling my
            creativity and knowledge into crafting impressive websites and
            applications. Working with diverse clients, I have assisted them in
            establishing a strong online presence. Continuously striving to stay
            updated with the latest technologies and frameworks, I am committed
            to enhancing my skills and delivering exceptional results for every
            project.
          </p>
          <a href="">Read more {"->"}</a>
        </div>
        <div className="col2">
          <img src="assets/boy2.png" alt="" />
        </div>
      </div>
      <div className="skill">
        <SkillBoard />
      </div>

      <div className="experience">
        <div className="heading">
          <h1>
            <span>#</span>job-experience
          </h1>
        </div>
        <div className="hr"></div>
        <div></div>
      </div>
      <div className="experience-content">
        <JobExperience
          jobTitle="Full Stack Developer"
          company="The Spark Foundation"
          startDate="Oct 2022"
          endDate="September 2023"
          description="Work on Different Tasks and learn about many technologies (MERN, Flutter, Firebase)."
        />
        <JobExperience
          jobTitle="Freelance Flutter Developer"
          company="Linkedin"
          startDate="Jan 2023"
          endDate="September 2023"
          description="Work on freelance client app(social media for club) under construction."
        />
        <JobExperience
          jobTitle="Open Source Developer"
          company="GirlScript Summer of Code"
          startDate="May 2023"
          endDate="June 2023"
          description="Learn about open source development and contribute in website and make website responsive for mobile."
        />
        <JobExperience
          jobTitle="React Developer Intern"
          company="Let's Grow More"
          startDate="Sep 2022"
          endDate="Oct 2022"
          description="Learn and build task projects on reactjs (todo list , calculator , api fetch, form handling) "
        />
        <JobExperience
          jobTitle="Web Development Intern"
          company="Interns Pakistan"
          startDate="Aug 2022"
          endDate="Sep 2022"
          description="MCQS based intership on HTML,CSS,JAVASCRIPT,PHP,BOOTSTRAP and WORDPRESS"
        />
      </div>
    </div>
  );
};

export default LargeAboutme;
