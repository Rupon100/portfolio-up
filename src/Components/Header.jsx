 
import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const handleToggle = () => {
    setClicked(!clicked);
  };

  const handleScroll = (sectionId) => {
    setActiveNav(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setClicked(false);
  };

  return (
    <div className="relative bg-gray-900-600 text-white">
      <div className="top-0 left-0 max-w-5xl flex items-center p-3">
        <div className="relative w-full flex justify-between items-center">
          <h3 className="font-semibold text-xl">RuponX</h3>

          {/* Desktop Navigation */}
          <div className="hidden md:block relative">
            <ul className="flex items-center gap-4 relative">
              {[ "home","about", "projects", "education", "contact"].map((item) => (
                <li
                  key={item}
                  className="relative px-4 py-2 cursor-pointer transition-all duration-300 text-sm"
                  onClick={() => handleScroll(item)}
                >
                  {/* Background Animation */}
                  {activeNav === item && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gray-700/50 backdrop-blur-md"
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    />
                  )}
                  {/* Nav Text (Ensuring No Flash Effect) */}
                  <span className="relative z-10">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="cursor-pointer p-1"
            >
              {clicked ? (
                <IoCloseSharp className="w-6 h-5" />
              ) : (
                <FiMenu className="w-6 h-5" />
              )}
            </button>
          </div>

          <div>
            <motion.button
              className="px-3 py-1 bg-sky-900/50 backdrop-blur-md border hover:cursor-pointer"
              whileHover={{
                scale: 1.03,
                rotate: 0,
                
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Resume
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-16 w-full bg-gray-900 shadow-md md:hidden flex flex-col items-center gap-4 p-4"
          >
            <ul className="flex flex-col items-center gap-4 w-full">
              {[ "home", "about", "projects", "education", "contact"].map((item) => (
                <li
                  key={item}
                  className="nav w-full text-center py-2 text-white cursor-pointer relative"
                  onClick={() => handleScroll(item)}
                >
                  {/* Background Animation */}
                  {activeNav === item && (
                    <motion.div
                      layoutId="activeNavMobile"
                      className="absolute inset-0 bg-gray-700/50 backdrop-blur-md rounded-md"
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
