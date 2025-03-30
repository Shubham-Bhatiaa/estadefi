import { motion, AnimatePresence } from "framer-motion";
import { FaWallet } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({
  ref,
  headerOpacity,
  headerBlur,
  isScrolled,
  account,
  activeSection,
  menuOpen,
  setMenuOpen,
  connectWallet,
  scrollToSection
}) => {
  const navigate = useNavigate();
  const [showAuthFlow, setShowAuthFlow] = useState(false);

  const handleGetStarted = () => {
    setShowAuthFlow(true);
    navigate("/auth");
  };

  const handleLogoClick = () => {
    // If we're not already on the home page, navigate to it
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    // Scroll to top of home page
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Close mobile menu if open
    setMenuOpen(false);
  };

  return (
    <motion.header
      ref={ref}
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`
      }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className="relative">
            <div className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="ESTADEFI Logo"
                className="h-18 w-auto object-contain"
              />
              <motion.span
                className="h-[2px] bg-gradient-to-r from-indigo-600/80 to-purple-600/80 ml-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            "home",
            "problem",
            "solution",
            "properties",
            "tokens",
            "testimonials",
            "roadmap"
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize ${
                activeSection === item
                  ? "text-indigo-600 font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-indigo-600 after:left-0 after:-bottom-1"
                  : "text-zinc-400 font-bold hover:text-indigo-500"
              } transition-all duration-300`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 focus:outline-none z-30"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {account ? (
            <div className="flex items-center space-x-3">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {`${account.slice(0, 6)}...${account.slice(-4)}`}
              </span>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg">
                Dashboard
              </button>
            </div>
          ) : showAuthFlow ? (
            <button
              onClick={connectWallet}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center shadow-md hover:shadow-lg"
            >
              <FaWallet className="mr-2" />
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={handleGetStarted}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-2xl z-20 flex flex-col p-8"
          >
            <div className="flex flex-col space-y-6 mt-16">
              {[
                "home",
                "problem",
                "solution",
                "properties",
                "tokens",
                "testimonials",
                "roadmap"
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setMenuOpen(false);
                  }}
                  className={`capitalize text-left text-lg ${
                    activeSection === item
                      ? "text-indigo-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-auto">
              {account ? (
                <div className="flex flex-col space-y-3">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {`${account.slice(0, 6)}...${account.slice(-4)}`}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full">
                    Dashboard
                  </button>
                </div>
              ) : showAuthFlow ? (
                <button
                  onClick={() => {
                    connectWallet();
                    setMenuOpen(false);
                  }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center w-full"
                >
                  <FaWallet className="mr-2" />
                  Connect Wallet
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleGetStarted();
                    setMenuOpen(false);
                  }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center w-full"
                >
                  Get Started
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
