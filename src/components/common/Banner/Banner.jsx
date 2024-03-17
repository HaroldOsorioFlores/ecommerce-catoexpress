import React from "react";
import Image from "next/image";

const Banner = ({ name, img_src }) => {
  return (
    <div className="relative">
      <Image width={1600} height={555} className="rounded-none w-screen" src={img_src} alt={name} priority={true}/>
      <div className="absolute bottom-12 left-0 w-2/5 bg-slate-800 flex items-center justify-center">
        <Image width={1054} height={162} src="/images/page_name.png" className="rounded-none" alt={name} />
        <div className="absolute z-10 left-1 sm:left-3 md:left-4 lg:left-5 text-white font-semibold text-xl sm:text-3xl md:text-5xl lg:text-7xl">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
