import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <div className="flex mt-2 mb-6 flex-start">
                <img
                  className="w-12 h-12 rounded-full mr-6 border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <p>{testimonial.user}</p>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
