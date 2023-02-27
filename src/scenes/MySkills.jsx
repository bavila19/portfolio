import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION  */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">Skills</span>
          </p>
          <LineGradient width="w=1/3" />
          <p className="mt-10 mb-7">
            I am a first-generation immigrant that can bring a unique
            perspective and skill set to the field. Like many first-generation
            immigrants, I have a strong background in math and science, which
            can be helpful in software engineering. Overall I am culturally
            aware, adaptable, and persistent. I bring a valuable set of skills
            and experience to the field and can help drive innovation and
            diversity in the tech industry.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={skills}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skills} />
          )}
        </div>
      </div>
      {/* SKILLS  */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE  */}
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            }}
        >
            <div className=" relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">01</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Web Development</p>
                </div>
                <div className="w-12 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
            </div>
            <ul className="mt-5 marker:text-blue list-disc">
                <li>JavaScrtipt</li>
                <li>BootStrap.js</li>
                <li>Tailwind css</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Django</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
            </ul>

        </motion.div>
        {/*  Computer science */}
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            }}
        >
            <div className=" relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">02</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Computer Science</p>
                </div>
                <div className="w-12 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
            </div>
            <ul className="mt-5 marker:text-red list-disc">
                <li>Python</li>
                <li>Data Structures </li>
                <li>Algorithms</li>
                <li>Object Oriented Programming</li>
                <li>Objects Relational Mappers</li>
                <li>Object Document Mappers</li>
            </ul>

        </motion.div>
        {/* Soft Skills   */}
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            }}
        >
            <div className=" relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">03</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Soft Skills</p>
                </div>
                <div className="w-12 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
            </div>
            <ul className="mt-5 marker:text-yellow list-disc ">
                <li>Collaboration</li>
                <li>Creative</li>
                <li>Empathy</li>
                <li>Leadership</li>
                <li>Persistent</li>
                <li>Time Management</li>
                <li>Communication</li>
                <li>Adaptability</li>
            </ul>

        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
