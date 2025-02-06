import About from "../Components/About";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import { motion } from "framer-motion";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HomeLayout = () => {
  return (
    <div className="bg-bg text-text">
      <div className="max-w-5xl mx-auto min-h-screen space-y-4 md:space-y-10">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <Header />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Banner />
        </motion.div>


        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Education></Education>
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Skills></Skills>
        </motion.div>


        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Projects></Projects>
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Contact></Contact>
        </motion.div>

      </div>
    </div>
  );
};

export default HomeLayout;
