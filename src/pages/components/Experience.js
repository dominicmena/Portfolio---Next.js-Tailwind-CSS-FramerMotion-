import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>@ {company}</a>{" "}
        </h3>
        <span>
          {time} || {address}
        </span>
        <p>
            {work}
        </p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul>
          <Details
          position='Senior Strategy & Operations Associate' company='DoorDash'
          companyLink='https://www.doordash.com/' time='Aug 2021 - Dec 2022' address='Remote'
        work='Responsibilities included extracting specific, large data samples related to sales, reconciliations, and consumer reports using SQL queries in MODE. Analyzing the data and providing insights to various stakeholders was also a crucial part of the job. Cross-functional collaboration with account owners ensured a seamless onboarding experience for enterprise merchants. Additionally, commission audits, process gaps, and document improvements were built and scaled by leading projects. To foster merchant relationships and create effective sales strategies, attendance at QBRs with post-sales team members was necessary.'
          
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
