import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-deep_sky rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-25 h-25 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Software Engineer with experience in building scalable
        and innovative web and mobile applications. Over the years, I have honed
        my skills in a variety of programming languages and frameworks,
        including Python, Django, React, Tailwind CSS, PHP, Laravel, Java, C++,
        Flutter, and Dart. I thrive on problem-solving and enjoy leveraging my
        diverse skill set to create efficient and user-friendly solutions.
        <br></br>
        <br></br>
        From full-stack development to mobile app creation, I have worked on a
        variety of projects that challenge me to push the boundaries of what’s
        possible.
        <br></br>
        <br></br>I am always eager to learn new technologies and apply them to
        real-world scenarios to improve user experience and streamline
        processes. Whether it's optimizing server-side performance, designing
        intuitive UIs, or developing cross-platform mobile apps, I am dedicated
        to delivering high-quality software that meets both business and user
        needs.
      </motion.p>

      <div className="mt-20 flex justify-center items-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
