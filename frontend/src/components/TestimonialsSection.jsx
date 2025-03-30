import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    title: "Tech Entrepreneur",
    investment: "₹40,000 (0.5 ETH)",
    return: "12% ROI in 3 months",
    quote:
      "I never thought I could own part of a luxury apartment in Mumbai with just ₹40,000. ESTADEFI has completely transformed how I think about real estate investment.",
    image: "./image1.png",
    rating: 5
  },
  {
    name: "Priya Patel",
    title: "Financial Analyst",
    investment: "₹95,000 (1.2 ETH)",
    return: "8% rental yield + 15% appreciation",
    quote:
      "The liquidity is what sold me - I was able to sell part of my holdings when I needed cash without any hassle. Try doing that with traditional real estate!",
    image: "./image2.png",
    rating: 4.5
  },
  {
    name: "Arjun Mehta",
    title: "Marketing Professional",
    investment: "₹24,000 (0.3 ETH)",
    return: "10% ROI in 6 months",
    quote:
      "Finally, real estate investing that fits my millennial lifestyle! I've referred five of my friends who are now investing through ESTADEFI.",
    image: "./image3.png",
    rating: 5
  },
  {
    name: "Sneha Gupta",
    title: "Software Engineer",
    investment: "₹55,000 (0.7 ETH)",
    return: "9.5% annual returns",
    quote:
      "As an NRI, investing in Indian real estate was always a nightmare until ESTADEFI. Now I can build my portfolio back home without any paperwork or travel.",
    image: "./image4.png",
    rating: 4.5
  }
];

const TestimonialsSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-star-${i}`} className="text-yellow-400" />
      );
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real investors seeing real returns from our tokenized real estate
            platform.
          </p>
        </div>

        <Slider {...sliderSettings} className="testimonial-slider">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="px-4 pb-8">
              <div className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {renderStarRating(testimonial.rating)}
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Initial Investment</p>
                      <p className="font-semibold">{testimonial.investment}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Returns</p>
                      <p className="font-semibold text-green-600">
                        {testimonial.return}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
