import profile from "../assets/profile-pic.png";
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center gap-4 border md:min-h-[500px] lg:min-h-[600px]"
    >
        <div className="flex flex-col text-center gap-2" >
          <h2 className="title">About Me</h2>
          <small className="text-sm" >Code. Create. Innovate.</small>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-4 items-center p-4">
          <div className="order-2 text-center lg:text-left lg:order-1 space-y-3 lg:w-3/5 " >
            <span className="text-lg " >Hello there! </span>
            <h2 className="title" >I'm Rupon Mia</h2>
            <p>
              A passionate web developer skilled in JavaScript, ReactJS, and
              Tailwind CSS. I specialize in crafting visually appealing and
              high-performance web applications, ensuring smooth user
              experiences. I thrive on solving complex problems and bringing
              innovative ideas to life through clean and efficient code.
            </p>
          </div>

          <div className="order-1 lg:order-2 lg:w-2/5 flex justify-center items-center" >
            <img
              className="max-w-[250px] md:max-w-[300px]"
              src={profile}
              alt="mine-photo"
            />
          </div>
        </div>
      </div>
     
  );
};

export default About;
