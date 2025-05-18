import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImage from "../assets/Profile/shohag.png";

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
  console.log("ww", profileImage);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am a dedicated Software Engineer with years of experience working
          across various software companies, taking on dynamic roles such as Web
          Developer, Testing Engineer, and Front-End Designer. My passion lies
          in building scalable, secure, and high-performance applications that
          solve real-world problems.
          <br />
          <br />
          My technical expertise spans across multiple domains. I specialize in
          Object-Oriented Design and Analysis, and I'm highly proficient in
          back-end development using technologies like Java (Spring Boot),
          Groovy on Grails, Node.js, PHP, CodeIgniter, ASP.NET Web Forms, ASP
          Classic, and ASP.NET MVC. Whether it's designing RESTful APIs or
          optimizing back-end logic, I ensure reliable and maintainable
          solutions.
          <br />
          <br />
          I have solid experience working with relational and non-relational
          databases including Oracle, MySQL, MS SQL Server, and MongoDB. On the
          client side, I create intuitive and responsive interfaces using
          AngularJS, Angular, JavaScript, jQuery, HTML, CSS, and Tailwind —
          combining clean design with usability.
          <br />
          <br />I believe in continuous learning and adapting to new challenges.
          My goal is to craft high-quality software that not only meets
          technical requirements but also enhances user experience and drives
          business growth.
        </motion.p>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="w-full  flex justify-center"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="max-w-full h-[550px] object-contain -mt-44"
          />
        </motion.div>
      </div>

      <div className="mt-20 flex justify-center items-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
