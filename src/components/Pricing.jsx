import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wider my-8 text-center">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 mb-20">
            <div className="border border-neutral-700 rounded-xl p-10">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className=" bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center mt-8">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className=" inline-flex justify-center text-center items-center w-full h-12 p-5 mt-20 tracking-tight border border-orange-900 rounded-lg hover:bg-orange-900 transition text-lg"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
