import profile from "../assets/profile-pic.png";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Front-End Visionary",
      "ReactJS Specialist",
      "ReactJS Wizard",
    ],
    loop: 0,
    
  });
  return (
    <div
      id="home"
      className="p-2 flex gap-4 flex-col justify-center items-center py-8 md:min-h-[500px] lg:min-h-[600px]"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center p-6">
        <div className="w-full flex justify-center lg:w-1/3">
          <img
            className="max-w-[250px] md:max-w-[300px]"
            src={profile}
            alt="mine-photo"
          />
        </div>
        <div className="w-full p-2 lg:w-2/3 space-y-2">
          <h2 className="font-semibold text-lg">Welcome to My Digital Space</h2>
          <p className="text-2xl md:text-4xl font-semibold">{text}_</p>
          <p className="">
            I'm Rupon Mia, a passionate web developer skilled in JavaScript,
            ReactJS, and Tailwind CSS. I create visually stunning and responsive
            websites, turning innovative ideas into seamless digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
