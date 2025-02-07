import html from "../assets/skills-logo/html-5.png";
import css from "../assets/skills-logo/css-3.png";
import tailwind from "../assets/skills-logo/64px-Tailwind_CSS_Logo.svg.png";
import javascript from "../assets/skills-logo/js.png";
import reactIcon from "../assets/skills-logo/react.png";

import firebase from "../assets/skills-logo/icons8-firebase-96.png";
import nodejs from "../assets/skills-logo/nodejs.png";
import expressjs from "../assets/skills-logo/icons8-express-js-100.png";
import mongo from "../assets/skills-logo/mongodb.png";
import jwt from "../assets/skills-logo/jwt.png";

import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="p-2 text-center flex flex-col justify-center items-center gap-6 overflow-hidden">
      <h2 className="title">My Tech Arsenal</h2>
      <div className="space-y-6 mt-4" >
        <Marquee speed={50} pauseOnHover={true} className="" >
          <img src={html} alt="HTML" className="w-22 h-22 mx-10" />
          <img src={css} alt="CSS" className="w-22 h-22 mx-10" />
          <img src={tailwind} alt="Tailwind" className="w-22 h-22 mx-10" />
          <img src={javascript} alt="JavaScript" className="w-22 h-22 mx-10" />
          <img src={reactIcon} alt="React" className="w-22 h-22 mx-10" />
        </Marquee>

        <Marquee
          speed={50}
          pauseOnHover={true}
          direction="right"
        >
          <img src={firebase} alt="Firebase" className="w-22 h-22 mx-10" />
          <img src={nodejs} alt="Node.js" className="w-22 h-22 mx-10" />
          <img src={expressjs} alt="Express.js" className="w-22 h-22 mx-10" />
          <img src={mongo} alt="MongoDB" className="w-22 h-22 mx-10" />
          <img src={jwt} alt="JWT" className="w-22 h-22 mx-10" />
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
