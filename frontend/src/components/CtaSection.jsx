import { FaArrowRight } from "react-icons/fa";

const CtaSection = ({ scrollToSection }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Real Estate Investment Journey?
        </h2>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
          Join thousands of investors already benefiting from our tokenized real
          estate platform. Start with as little as ₹8,000.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg hover:bg-indigo-50 transition font-medium text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Get Started Now
          </button>
          <button
            onClick={() => scrollToSection("properties")}
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-medium text-lg"
          >
            Explore Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
