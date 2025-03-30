import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({ scrollToSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Generate random particles for background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 15 + 15,
    size: Math.random() * 80 + 20,
    opacity: Math.random() * 0.3
  }));

  return (
    <section
      id="home"
      ref={ref}
      className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white"
    >
      {/* Animated particles/shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Democratizing
          </span>{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-white bg-clip-text text-transparent">
            Real Estate Investments
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-10"
        >
          Own fractions of premium properties with as little as ₹8,000. Earn
          rental income and benefit from property appreciation without the
          traditional barriers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("properties")}
            className="bg-white text-indigo-700 px-8 py-4 rounded-lg hover:bg-indigo-50 transition font-medium text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Explore Properties
          </button>
          <button
            onClick={() => scrollToSection("solution")}
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-medium text-lg flex items-center justify-center"
          >
            How It Works <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-20"
          aria-hidden="true"
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;