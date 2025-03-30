import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BsCurrencyDollar, BsGraphUp, BsLightningCharge } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";

const STATS = [
  {
    value: 500,
    label: "Million USD",
    sublabel: "Current Market (2025)",
    icon: <BsCurrencyDollar />
  },
  {
    value: 5,
    label: "Billion USD",
    sublabel: "Projected by 2030",
    icon: <BsGraphUp />
  },
  {
    value: 55.6,
    label: "%",
    sublabel: "CAGR Growth Rate",
    icon: <FaPercentage />
  },
  {
    value: 700,
    label: "Million+",
    sublabel: "Smartphone Users",
    icon: <BsLightningCharge />
  }
];

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-indigo-600 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 flex justify-center items-end">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimal="."
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                )}
                <span className="text-sm ml-1">
                  {stat.label === "%" ? stat.label : ""}
                </span>
              </div>
              <p className="font-medium text-gray-900">
                {stat.label !== "%" ? stat.label : ""}
              </p>
              <p className="text-gray-500 text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
