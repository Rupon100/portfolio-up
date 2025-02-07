const Education = () => {
  return (
    <div
      id="education"
      className="p-4 text-center flex gap-6 flex-col justify-center items-center"
    >
      <h2 className="title">Academic Background</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 w-full">
        <div className="relative education text-left space-y-2 bg-sky-200/10 overflow-hidden">
          <div className="absolute h-14 w-14 rounded-full bg-text blur-2xl right-0"></div>
          <div className="absolute h-14 w-14 rounded-full bg-text blur-3xl bottom-0"></div>
          <h4 className="text-xl md:text-2xl font-semibold">
            Higher Secondary Certificate
          </h4>
          <h2 className="text-lg">Notre Dame College, Mymensingh</h2>
          <p className="font-semibold">Background: Science</p>
          <h3>Result: A+</h3>
        </div>
        <div className="relative education text-left space-y-2 bg-sky-200/10 overflow-hidden ">
          <div className="absolute h-14 w-14 rounded-full bg-text blur-2xl right-0"></div>
          <div className="absolute h-14 w-14 rounded-full bg-text blur-3xl bottom-0"></div>
          <h4 className="text-xl md:text-2xl font-semibold">
            B.Sc. in Computer Science and Engineering
          </h4>
          <h2 className="text-lg">Southeast University, Dhaka</h2>
          <p className="font-semibold">Current Semester: 3rd Semester</p>
          <h3>Status: In Progress</h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
