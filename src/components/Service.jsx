export default function Service() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-[auto_auto] mt-6">
        <div>
          <div className="py-32 pl-52 pr-8">
            <h1 className="font-poppins font-bold text-black text-[64px]">
              Our Services
            </h1>
            <p className="text-[#6C6C6C] font-medium font-poppins text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className="service-3 py-40 px-10">
          <h1 className="font-poppins font-bold text-4xl text-white mb-7">
            Modern natural oil and gas refineries.
          </h1>
          <button className="font-poppins font-semibold text-base text-white bg-[#F40404] py-3 px-8 hover:bg-white hover:text-[#f40404] transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="service-1 py-40 px-10">
          <h1 className="font-poppins font-bold text-4xl text-white mb-7">
            Supply of national industries.
          </h1>
          <button className="font-poppins font-semibold text-base text-white bg-[#F40404] py-3 px-8 hover:bg-white hover:text-[#f40404] transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="service-2 py-40 px-10">
          <h1 className="font-poppins font-bold text-4xl text-white mb-7">
            National fuel distribution and supply.
          </h1>
          <button className="font-poppins font-semibold text-base text-white bg-[#F40404] py-3 px-8 hover:bg-white hover:text-[#f40404] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
