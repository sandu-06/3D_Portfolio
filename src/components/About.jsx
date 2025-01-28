import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, subtitle, duration, description, icon }) => (
  <Tilt className="xs:w-[550px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[300px] flex flex-col">
        
        {/* Top Section: Icon and Basic Info */}
        <div className="flex items-center gap-6">
          {/* Left - Icon */}
          <div className="w-20 h-20 flex-shrink-0">
            <img src={icon} alt={title} className="w-full h-full object-contain rounded-full" />
          </div>

          {/* Right - Title and Subtitle */}
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] font-bold">{title}</h3>
            <p className="text-secondary text-[16px] font-semibold">{subtitle}</p>
            <p className="text-gray-400 text-[14px]">{duration}</p>
          </div>
        </div>

        {/* Description Section - Full Width */}
        <p className="text-white text-[14px] mt-4 text-justify">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a third-year ICT undergraduate at the University of Sri
        Jayewardenepura, passionate about web development. My focus is on
        mastering technologies, particularly through MERN stack projects. I am
        committed to learning and contributing to innovative, impactful solutions.  
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a third-year ICT undergraduate at the University of Sri
        Jayewardenepura, passionate about web development. My focus is on
        mastering technologies, particularly through MERN stack projects. I am
        committed to learning and contributing to innovative, impactful solutions.  
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");