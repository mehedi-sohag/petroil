export default function Gallery() {
  return (
    <>
      <div className="grid grid-cols-4 gap-7">
        <div className="relative after:content[''] after:absolute after:top-0 after:left-0 after:bg-[rgba(196,196,196,0.27)] after:block after:w-full after:h-full">
          <img
            src="/images/gallery-1.png"
            alt="Image-1"
            className="block object-cover"
          />
        </div>
        <div className="relative after:content[''] after:absolute after:top-0 after:left-0 after:bg-[rgba(196,196,196,0.27)] after:block after:w-full after:h-full">
          <img
            src="/images/gallery-2.png"
            alt="Image-2"
            className="block object-cover"
          />
        </div>
        <div className="relative after:content[''] after:absolute after:top-0 after:left-0 after:bg-[rgba(196,196,196,0.27)] after:block after:w-full after:h-full">
          <img
            src="/images/gallery-3.png"
            alt="Image-3"
            className="block object-cover"
          />
        </div>
        <div className="relative after:content[''] after:absolute after:top-0 after:left-0 after:bg-[rgba(196,196,196,0.27)] after:block after:w-full after:h-full">
          <img
            src="/images/gallery-4.png"
            alt="Image-4"
            className="block object-cover"
          />
        </div>
      </div>
    </>
  );
}
