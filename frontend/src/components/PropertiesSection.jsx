
import {motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCheck2Circle, BsArrowRight } from "react-icons/bs";

const PROPERTIES = [
  {
    id: 1,
    name: "Luxury Apartment - Mumbai",
    location: "Bandra West, Mumbai",
    value: "₹2,00,000 (2.5 ETH)",
    fractions: "10,000",
    minInvestment: "₹8,000 (0.1 ETH)",
    yield: "8%",
    appreciation: "12% (Annual)",
    occupancy: "98%",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Premium", "High Yield"]
  },
  {
    id: 2,
    name: "Commercial Space - Bangalore",
    location: "Whitefield, Bangalore",
    value: "₹3,00,000 (3.8 ETH)",
    fractions: "15,000",
    minInvestment: "₹8,000 (0.1 ETH)",
    yield: "7.5%",
    appreciation: "10% (Annual)",
    occupancy: "95%",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Commercial", "Tech Hub"]
  },
  {
    id: 3,
    name: "Villa - Goa",
    location: "North Goa",
    value: "₹95,000 (1.2 ETH)",
    fractions: "8,000",
    minInvestment: "₹8,000 (0.1 ETH)",
    yield: "9%",
    appreciation: "15% (Annual)",
    occupancy: "85%",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Vacation", "High Appreciation"]
  }
];

const PropertiesSection = () => {
  const [hoveredProperty, setHoveredProperty] = useState(null);

  return (
    <section id="properties" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated selection of premium Indian real estate
            investments, each offering unique benefits and returns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 relative"
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                {property.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-1">
                  <FaMapMarkerAlt className="text-indigo-500 mr-2" />
                  <span className="text-gray-600 text-sm">
                    {property.location}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{property.name}</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">Value</p>
                    <p className="font-semibold">{property.value}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Min. Investment</p>
                    <p className="font-semibold">{property.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Rental Yield</p>
                    <p className="font-semibold text-green-600">
                      {property.yield}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Appreciation</p>
                    <p className="font-semibold text-indigo-600">
                      {property.appreciation}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-600 text-sm">Occupancy:</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: property.occupancy }}
                      ></div>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm">
                    Invest Now
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {hoveredProperty === property.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-indigo-900/90 text-white p-6 flex flex-col justify-center"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {property.name}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <BsCheck2Circle className="text-green-400 mr-2" />{" "}
                        Tokenized into {property.fractions} shares
                      </li>
                      <li className="flex items-center">
                        <BsCheck2Circle className="text-green-400 mr-2" />{" "}
                        Monthly rental distributions
                      </li>
                      <li className="flex items-center">
                        <BsCheck2Circle className="text-green-400 mr-2" /> Fully
                        managed property
                      </li>
                      <li className="flex items-center">
                        <BsCheck2Circle className="text-green-400 mr-2" /> Legal
                        ownership via SPV
                      </li>
                    </ul>
                    <button className="mt-auto bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition font-medium">
                      View Property Details
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition inline-flex items-center">
            View All Properties <BsArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
