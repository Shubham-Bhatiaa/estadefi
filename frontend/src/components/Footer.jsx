import {
  FaBuilding,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <FaBuilding className="text-indigo-400 text-2xl mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ESTADEFI
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Democratizing real estate investment through blockchain
              technology. Making premium properties accessible to all.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-indigo-400 transition text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solution")}
                  className="hover:text-indigo-400 transition text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("properties")}
                  className="hover:text-indigo-400 transition text-left"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="hover:text-indigo-400 transition text-left"
                >
                  Roadmap
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-indigo-400 transition text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Legal Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-indigo-400" />
                <span>
                  Block 3, Level 8, Financial District, Mumbai 400051, India
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-indigo-400" />
                <a
                  href="mailto:info@estadefi.com"
                  className="hover:text-indigo-400 transition"
                >
                  info@estadefi.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-indigo-400" />
                <a
                  href="tel:+918800123456"
                  className="hover:text-indigo-400 transition"
                >
                  +91 8800 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ESTADEFI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
