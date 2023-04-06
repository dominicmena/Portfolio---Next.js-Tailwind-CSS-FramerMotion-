import React from "react";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
  return (
      <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @ {company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} || {address}
        </span>
        <p className="font-medium w-full md:text-md">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Strategy & Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Aug 2021 - Dec 2022"
            address="Remote"
            work="Responsible for conducting data analysis through writing SQL queries in MODE, collaborating with account owners to ensure smooth merchant onboarding, developing and implementing projects to enhance operational efficiency, and participating in Quarterly Business Reviews (QBRs) with post-sales team members to establish strong relationships with merchants and devise sales strategies.
            
            "
          />
          <Details
            position="Lead Merchant Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Jul 2019 - Aug 2021"
            address="Remote"
            work="Established and managed team structure, creating training documents and schedules, conducting team meetings, and tracking metrics. Additionally, I assisted merchants with building menus, resolving logistical issues, and addressing concerns with delivery metrics. I also designed email campaigns based on merchant promotions, increased awareness of new locations and merchants, trained new merchants on platform tools and navigation, and created and built out a team structure including training docs/schedule, team meetings, and setting performance metrics."
          />
          <Details
            position="Non-Partner Launch Lead"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Mar 2019 - Jul 2019"
            address="Remote"
            work="Conducted thorough data verification to ensure accuracy before uploading large amounts of data to the platform, created and streamlined standard processes to work cross-functionally with vendors and stakeholders, facilitated communication between internal teams and vendors to coordinate and meet deadlines, analyzed and provided feedback on team processes to improve efficiency, and monitored and reported on the quality of work provided by third-party vendors."
          />
          <Details
            position="Senior Onboarding Representative"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Jan 2018 - Mar 2019"
            address="Remote"
            work="Managed merchant onboarding by coordinating with Pre-Sales to handle internal data on merchants, addressed menu issues and complaints received through activation team requests, and facilitated the process of partnering with merchants and bringing them onto the platform."
          />
          <Details
            position="Enterprise Menu Team Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="May 2017 - Jan 2018"
            address="Remote"
            work="Developed proficiency in SQL to extract menu data and locate specific item information, entered and updated menus efficiently and accurately, paid attention to detail, collaborated with high-level merchants on the platform to coordinate menu roll-outs, and worked across teams to provide top partnered merchants with a positive experience in menu support."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
