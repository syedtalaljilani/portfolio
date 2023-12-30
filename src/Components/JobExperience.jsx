import React from 'react';
import "../styles/JobExperience.scss";
const JobExperience = ({ jobTitle, company, startDate, endDate, description }) => {
  return (
    <div className="job-experience">
      <div className="timeline">
        <div className="timeline-dot" />
        <div className="timeline-line" />
      </div>
      <div className="job-details">
        <h3 className="job-title">{jobTitle}</h3>
        <p className="company">{company}</p>
        <p className="date">{`${startDate} - ${endDate}`}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default JobExperience;
