import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import trending from "../assets/trending.png"
import rootedEarth from "../assets/rootedEarth.png"
import feeling from "../assets/feeling.png"
// import projectTitle from `../assets/${projectTitle}.png`
// let projectTitle = await import ("../assets/")

 
const container = {
    hidden: {},
    visible:{
        transition: {staggerChildren:0.2}
    }
};

const projectVariant = {
    hidden:{opacity:0, scale:0.8},
    visible: {opacity: 1, scale:1 }
}

const Project =({title, subtitle})=>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition  duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    // const projectTitle = title.pslit(" ").join("-").toLowerCase();

    return(
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p>{subtitle}</p>
            </div>
            {/* <img src={projectTitle} alt= "ahh"/> */}
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
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
        <p className="mt-10 mb-10">
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
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
            {/* ROW ONE */}
            <div className="flex justify-center text-center items-center p-10 bg-red first-letter max-w-[400px] text-2xl font-playfair font-semibold">
                BEUT
            </div>
            <Project title=" Rooted Earth" 
            subtitle={"hello"}
/>
            <Project title="project 1" subtitle={"hello"}><img src={rootedEarth} alt="work"/></Project>
            <Project title="project 1" subtitle={"hello"}/>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
