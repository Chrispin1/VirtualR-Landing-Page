import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-500 min-h-[800px]">
      <div className="text-center">
        <span className="text-orange-500 bg-neutral-900 text-sm font-medium px-2 py-1 rounded-full h-6 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide">
          Easily build{" "}
          <span className=" bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="sm:w-1/2 lg:w-1/3 w-full">
            <div className="flex">
              <div className="flex mx-6 w-10 h-10 p-2 bg-neutral-900 rounded-full justify-center items-center text-orange-700">
                {feature.icon}
              </div>
              <div>
                <h1 className="mt-1 mb-4 text-xl">{feature.text}</h1>
                <p className="p-2 text-neutral-500 mb-20 text-md">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
