import { AiOutlineArrowRight } from "react-icons/ai";

export default function Blog() {
  return (
    <>
      <div className="bg-[#F0F0F0] py-28">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-3 gap-16">
            <div className="blog-1 pt-20 pb-14 px-12">
              <h1 className="text-2xl font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h1>
              <button className="font-poppins text-white font-semibold text-xs py-2.5 px-6 bg-white/50 mt-12 hover:bg-[#f40404] transition-all duration-300">
                Read more
              </button>
            </div>
            <div className="blog-2 pt-20 pb-14 px-12">
              <h1 className="text-2xl font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h1>
              <button className="font-poppins text-white font-semibold text-xs py-2.5 px-6 bg-white/50 mt-12 hover:bg-[#f40404] transition-all duration-300">
                Read more
              </button>
            </div>
            <div className="blog-3 pt-20 pb-14 px-12">
              <h1 className="text-2xl font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h1>
              <button className="font-poppins text-white font-semibold text-xs py-2.5 px-6 bg-white/50 mt-12 hover:bg-[#f40404] transition-all duration-300">
                Read more
              </button>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center font-poppins text-base font-bold text-black float-right mt-7 gap-4 hover:text-[#f40404]"
          >
            MORE FROM THE BLLOG
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </>
  );
}
