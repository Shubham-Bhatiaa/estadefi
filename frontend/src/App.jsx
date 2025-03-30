import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import "./App.css";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform
} from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import PropertiesSection from "./components/PropertiesSection";
import TokenSection from "./components/TokenSection";
import TestimonialsSection from "./components/TestimonialsSection";
import RoadmapSection from "./components/RoadmapSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const AppContent = () => {
  const [account, setAccount] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.9]);
  const headerBlur = useTransform(scrollY, [0, 50], [0, 8]);

  // Check authentication on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section tracking for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      navigate("/");
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const handleSignup = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      navigate("/");
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  // Scroll to section helper
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      <Header
        ref={headerRef}
        headerOpacity={headerOpacity}
        headerBlur={headerBlur}
        isScrolled={isScrolled}
        account={account}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        connectWallet={connectWallet}
        scrollToSection={scrollToSection}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/auth"
          element={<Auth onLogin={handleLogin} onSignup={handleSignup} />}
        />
        <Route path="/dashboard" element={<Dashboard account={account} />} />
        <Route
          path="/"
          element={
            <>
              <Hero scrollToSection={scrollToSection} />
              <Stats />
              <ProblemSection scrollToSection={scrollToSection} />
              <SolutionSection scrollToSection={scrollToSection} />
              <PropertiesSection />
              <TokenSection />
              <TestimonialsSection />
              <RoadmapSection />
              <FaqSection />
              <CtaSection scrollToSection={scrollToSection} />
              <Footer scrollToSection={scrollToSection} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
