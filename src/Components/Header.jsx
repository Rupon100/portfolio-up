import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handletoggle = () => {
    setClicked(!clicked);
  }
  return (
    <div className="">
      <div className="relative fixed top-0 left-0 max-w-5xl flex items-center p-3">
        <div className="w-full flex justify-between items-center">
          <h3>rupon100</h3>
          <div>
            <div className="hidden md:block">navbar</div>
            <div className="md:hidden">
              <button onClick={handletoggle} className="cursor-pointer border p-1 border-gray-800" >
                {clicked ? <IoCloseSharp className="w-6 h-5" /> : <FiMenu className="w-6 h-5" />}
              </button>
            </div>
          </div>
          <div className="">
            <button className=" px-3 py-1 bg-gray-700 opacity-45 border hover:cursor-pointer ">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
