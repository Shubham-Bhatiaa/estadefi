import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBuilding, FaHandHoldingUsd, FaCubes } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const ProblemSection = ({ scrollToSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="problem" ref={ref} className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            The Real Estate Investment Paradox in India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The dream of owning real estate feels out of reach for 99% of urban
            professionals. Traditional real estate is not just expensive—it's
            also illiquid and complex.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "High Barrier to Entry",
              description:
                "With property prices soaring between ₹50 lakh to ₹5 crore, single-property investments remain a luxury for the few.",
              icon: <FaBuilding className="text-indigo-600" />
            },
            {
              title: "Poor Liquidity",
              description:
                "Traditional real estate locks away capital with no easy way to exit. Selling property takes months or even years.",
              icon: <FaHandHoldingUsd className="text-indigo-600" />
            },
            {
              title: "Complex Process",
              description:
                "Opaque transaction processes, paperwork, and legal complexities keep most people on the sidelines.",
              icon: <FaCubes className="text-indigo-600" />
            },
            {
              title: "Rising Inflation",
              description:
                "Devaluing traditional FIAT currencies and increasing property prices make it harder to enter the market each year.",
              icon: <BsGraphUp className="text-indigo-600" />
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            These challenges have kept real estate investing exclusive to the
            wealthy, despite it being one of the most reliable wealth-building
            assets throughout history.
          </p>
          <button
            onClick={() => scrollToSection("solution")}
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
          >
            Discover Our Solution
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
