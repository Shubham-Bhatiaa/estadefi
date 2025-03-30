import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBuilding, FaCoins, FaHandshake, FaChartLine } from "react-icons/fa";
import { BsCheck2Circle, BsArrowRight } from "react-icons/bs";
import { RiExchangeLine } from "react-icons/ri";

const TokenSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      id="tokens"
      ref={ref}
      className="py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900 text-white"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            $ETD Token Economy
          </h2>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            Our dual token system drives the ESTADEFI ecosystem, providing both
            property-specific ownership and platform-wide benefits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-indigo-400/30"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                <FaBuilding className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">REALFi Tokens</h3>
                <p className="text-indigo-200">Property-Specific Tokens</p>
              </div>
            </div>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>
                  Each property has its own unique token (e.g., "MUMBAI-1")
                  representing legal ownership
                </p>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>
                  Value directly tied to property valuation and rental income
                </p>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>
                  Receive rental distributions proportional to your token
                  holdings
                </p>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>Tradeable 24/7 on ESTADEFI marketplace with minimal fees</p>
              </li>
            </ul>

            <div className="bg-indigo-800/50 p-4 rounded-lg">
              <p className="font-medium">Example: MUMBAI-1 token</p>
              <p className="text-sm text-indigo-200 mt-1">
                100,000 tokens = 1 Mumbai luxury apartment valued at ₹2 crore
              </p>
              <p className="text-sm text-indigo-200">
                1 token = ₹200 of real estate value
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-indigo-400/30"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                <FaCoins className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">$ETD Token</h3>
                <p className="text-indigo-200">Platform Governance Token</p>
              </div>
            </div>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>
                  Platform governance token giving voting rights on property
                  acquisitions
                </p>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>Earn platform fee discounts and premium property access</p>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>
                  Stakeable for additional yield from platform revenue share
                </p>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p>Used for rental distributions and platform transactions</p>
              </li>
            </ul>

            <div className="bg-indigo-800/50 p-4 rounded-lg">
              <p className="font-medium">Total Supply: 100,000,000 $ETD</p>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="text-sm flex items-center justify-between">
                    <span>Community & Investors</span>
                    <span>40%</span>
                  </p>
                  <div className="w-full h-2 bg-indigo-200/20 rounded-full mt-1">
                    <div className="h-full bg-indigo-400 rounded-full w-2/5"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm flex items-center justify-between">
                    <span>Treasury & Growth</span>
                    <span>35%</span>
                  </p>
                  <div className="w-full h-2 bg-indigo-200/20 rounded-full mt-1">
                    <div className="h-full bg-indigo-400 rounded-full w-1/3"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm flex items-center justify-between">
                    <span>Team & Advisors</span>
                    <span>25%</span>
                  </p>
                  <div className="w-full h-2 bg-indigo-200/20 rounded-full mt-1">
                    <div className="h-full bg-indigo-400 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg hover:bg-indigo-50 transition font-medium inline-flex items-center">
            Read Tokenomics Paper <BsArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSection;
