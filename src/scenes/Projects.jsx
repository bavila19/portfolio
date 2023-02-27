import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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
        <p className="mt-10 mb-7">
        These software engineering projects were completed within a one-week sprint and served as valuable opportunities for professional growth. By collaborating with other software engineers, I were able to develop teamwork and communication skills while also learning new techniques and approaches. I had the chance to experiment with different frameworks, broadening my knowledge and expertise. Additionally, managing my own time during these projects has honed my organizational skills and enabled you to work more efficiently.        
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;
