import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";

const ROADMAP_DATA = [
  {
    quarter: "Q4 2025",
    title: "Platform Launch",
    description:
      "Platform MVP launch with 5-10 tokenized properties. SEBI-compliant regulatory framework development. Beta testing with early investors.",
    icon: <FaBuilding />
  },
  {
    quarter: "Q2 2026",
    title: "Marketplace Integration",
    description:
      "Full-scale platform launch with 50+ properties. Partnerships with real estate developers. Secondary marketplace integration for RealFi tokens.",
    icon: <RiExchangeLine />
  },
  {
    quarter: "Q4 2026",
    title: "Expansion & Lending",
    description:
      "Expansion to Tier 2 & Tier 3 cities. Tokenized real estate loans (collateralized lending via RealFi tokens). AI-driven property analytics for investors.",
    icon: <FaHandshake />
  },
  {
    quarter: "Q1 2027",
    title: "International Growth",
    description:
      "Institutional adoption (HNI & NRI investor outreach). International expansion into South Asian markets.",
    icon: <FaChartLine />
  }
];

const RoadmapSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="roadmap" ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Our Roadmap
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're building the future of Indian real estate investment, one
            milestone at a time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 hidden md:block"></div>

          <div className="space-y-12">
            {ROADMAP_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:items-start flex-col ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                } md:justify-between gap-8`}
              >
                <div className="md:w-5/12 z-10">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="text-indigo-600 text-2xl mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3">
                      {item.quarter}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 border-4 border-white shadow z-10"></div>
                </div>
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
