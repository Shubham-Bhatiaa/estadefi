import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEthereum, FaWallet, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const FEATURES = [
  {
    icon: (
      <FaEthereum className="text-4xl mb-4 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Fractional Ownership",
    description:
      "Start with as little as ₹8,000 (0.1 ETH) and own a piece of premium real estate in top Indian metros"
  },
  {
    icon: (
      <FaWallet className="text-4xl mb-4 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Instant Liquidity",
    description:
      "Trade your property tokens 24/7 on our marketplace - no more waiting months to sell"
  },
  {
    icon: (
      <FaChartLine className="text-4xl mb-4 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Passive Income",
    description:
      "Earn rental yields automatically distributed in $ETD tokens directly to your wallet"
  },
  {
    icon: (
      <FaShieldAlt className="text-4xl mb-4 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    ),
    title: "Secure & Compliant",
    description:
      "Fully regulated tokenization framework with SEBI compliance in development"
  }
];

const SolutionSection = ({ scrollToSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="solution" ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Introducing ESTADEFI: Real Estate, Reimagined
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're transforming how Indians invest in real estate through
            blockchain technology, making it accessible, liquid, and
            hassle-free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 group hover:bg-indigo-600 hover:border-indigo-700"
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            How ESTADEFI Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Properties Tokenized",
                description:
                  "Premium real estate assets are legally tokenized through our regulated SPV structure, creating REALFi tokens"
              },
              {
                step: "2",
                title: "Fractional Ownership",
                description:
                  "Investors purchase REALFi tokens representing fractional ownership in specific properties"
              },
              {
                step: "3",
                title: "Earn & Trade",
                description:
                  "Receive rental income as $ETD tokens and trade your property tokens 24/7 on our secondary marketplace"
              }
            ].map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
