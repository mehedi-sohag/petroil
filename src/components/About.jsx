export default function About() {
  return (
    <>
      <div className="py-32 bg-[#F0F0F0]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-[min-content_1fr]">
            <div className="bg-[#F40404] py-24 px-16">
              <h1 className="font-poppins font-bold text-white text-4xl w-[262px]">
                Learn more about our company
              </h1>
            </div>
            <div className="about flex items-center justify-center">
              <button className="font-poppins font-semibold text-base text-[#F40404] py-3.5 px-8 bg-white hover:bg-[#f40404] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
