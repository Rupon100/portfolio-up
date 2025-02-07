// import { AwesomeButtonShare } from "react-awesome-button";
import { MdEmail } from "react-icons/md";
import { useTypewriter } from "react-simple-typewriter";
import coder from "../assets/lottie/coder.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
// import "react-awesome-button/dist/styles.css";
// import { AwesomeButtonShare } from 'react-awesome-button';

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Front-End Visionary", "ReactJS Specialist", "ReactJS Wizard"],
    loop: 0,
  });
  return (
    <div
      id="home"
      className="p-2 flex gap-4 flex-col justify-center items-center py-8 md:min-h-[500px] lg:min-h-[600px]"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center p-6">
        <div className="order-1 lg:order-2 w-full flex justify-center lg:w-2/5">
          <Lottie className="" animationData={coder}></Lottie>
        </div>
        <div className="order-2 lg:order-1 w-full p-2 lg:w-3/5 space-y-2">
          <h2 className="font-semibold text-lg">Welcome to My Digital Space</h2>
          <p className="text-2xl md:text-4xl font-semibold">{text}_</p>
          <p className="">
            Passionate about building sleek, responsive, and high-performing web
            applications with ReactJS and Tailwind CSS.
          </p>
          <div className="flex gap-2">
            <motion.button
              id="projects"
              className="px-3 py-1 bg-sky-900/50 backdrop-blur-md border hover:cursor-pointer flex gap-2 items-center justify-center"
              whileHover={{
                scale: 1.03,
                rotate: 0,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3>Contact</h3>
              <MdEmail />
            </motion.button>
            <div>
              {/* <AwesomeButtonShare
                type="github"
                href="https://github.com/Rupon100"
              >
                GitHub
              </AwesomeButtonShare>
              <AwesomeButtonShare
                type="linkedin"
                href="https://www.linkedin.com/in/rupon-mia-757b58266/"
              >
                LinkedIn
              </AwesomeButtonShare> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
