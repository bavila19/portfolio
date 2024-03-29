import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import trending from "../assets/trending.png";
import rootedEarth from "../assets/rootedEarth.png";
import feeling from "../assets/feeling.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition  duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a 
        href="https://celadon-cocada-1724db.netlify.app"className="text-2xl font-playfair"
        target="_blank"
        rel="noreferrer"
        >{title}</a>
        <a 
        href="https://celadon-cocada-1724db.netlify.app" className="mt-7"
        target="_blank"
        rel="noreferrer"
        >{subtitle}</a>
      </div>
      <img src={feeling} alt="ahh"/>
    </motion.div>
  );
};
const Project2 = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition  duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a href="https://rootedearth.herokuapp.com"className="text-2xl font-playfair"
        target="_blank"
        rel="noreferrer">{title}</a>
        <a href="https://rootedearth.herokuapp.com" className="mt-7"
        target="_blank"
        rel="noreferrer">{subtitle}</a>
      </div>
      <img src={rootedEarth} alt="ahh" />
    </motion.div>
  );
};
const Project3 = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition  duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
      <a href="https://cool-licorice-e1c33b.netlify.app/"className="text-2xl font-playfair"
      target="_blank"
      rel="noreferrer">{title}</a>
      <a href="https://cool-licorice-e1c33b.netlify.app/" className="mt-7"
      target="_blank"
      rel="noreferrer">{subtitle}</a>
      </div>
      <img src={trending} alt="ahh" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-40 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            My <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w=1/3" />
          </div>
        </div>
        <p className="mt-5 mb-20">
          These software engineering projects were completed within a one-week
          sprint and served as valuable opportunities for professional growth.
          By collaborating with other software engineers, I were able to develop
          teamwork and communication skills while also learning new techniques
          and approaches. I had the chance to experiment with different
          frameworks, broadening my knowledge and expertise. Additionally,
          managing my own time during these projects has honed my organizational
          skills and enabled you to work more efficiently.
        </p>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-red first-letter max-w-[550px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Are You Feeling Down?"
            subtitle={
              "This websites purpose is lift up peoples spirits with compliments and puppy photos."
            }
          />
          <Project2
            title=" Rooted Earth"
            subtitle={
              "This app helps users understand and track the growth of their plants by allowing them to upload pictures and descriptions. "
              
            }
          />
          <Project3
            title=" #Trending"
            subtitle={
              "#Trending is an app for people of all ages to keep up with todays generation."
            }
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[550px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
