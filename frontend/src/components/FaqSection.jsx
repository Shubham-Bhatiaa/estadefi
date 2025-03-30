import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ_DATA = [
  {
    question: "How do I start investing in real estate with ESTADEFI?",
    answer:
      "Starting is simple: 1) Connect your crypto wallet, 2) Complete KYC verification, 3) Browse available properties, 4) Purchase REALFi tokens representing your chosen property. You can start with as little as ₹8,000 (0.1 ETH)."
  },
  {
    question: "How is my investment legally protected?",
    answer:
      "Each property on ESTADEFI is secured through a Special Purpose Vehicle (SPV) structure. Your REALFi tokens represent legal ownership in this SPV, ensuring that your investment is backed by real property rights under Indian law."
  },
  {
    question: "How do I receive rental income from my property investment?",
    answer:
      "Rental income is automatically distributed to token holders in the form of $ETD tokens based on your ownership percentage. These distributions happen daily and can be viewed in real-time on your dashboard."
  },
  {
    question: "What if I need to sell my investment quickly?",
    answer:
      "Unlike traditional real estate, ESTADEFI offers instant liquidity through our secondary marketplace where you can sell your REALFi tokens 24/7. You can sell part or all of your investment at any time."
  },
  {
    question: "Is ESTADEFI compliant with Indian regulations?",
    answer:
      "Yes, ESTADEFI is building a SEBI-compliant framework for tokenized real estate. Our legal team works closely with regulatory experts to ensure all investments meet current and upcoming regulatory requirements."
  }
];

const FaqSection = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get answers to the most common questions about tokenized real estate
            investment.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition"
                  aria-expanded={faqOpen[index]}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {faqOpen[index] ? (
                    <IoIosArrowUp className="text-indigo-600 flex-shrink-0" />
                  ) : (
                    <IoIosArrowDown className="text-indigo-600 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {faqOpen[index] && (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 bg-white border-t border-gray-100">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
