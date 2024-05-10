import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Instagram, Facebook, Twitter } from 'lucide-react';

const dataShop = [
  { label: "Ceprobis", url: "/Ceprobis" },
  { label: "Panificadora Ucsm", url: "/PanificadoraUcsm" },
  { label: "Como en Casa", url: "/ComoEnCasa" },
  { label: "El Cholo", url: "/ElCholo" },
];

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-6 px-14 md:px-20 lg:px-44">
      <hr className="border-t-2 border-gray-600" />
      <div className="flex flex-col md:flex-row w-full text-slate-50 text-tiny my-6">
        <div className="flex flex-col sm:flex-row w-full md:w-9/12 lg:w-full space-y-10 sm:space-y-0 px-5 sm:px-0 items-center justify-center">
          <div className="flex-col space-y-1.5 px-6 w-full sm:w-2/5">
           <Image
             width={1201}
             height={1201}
             className="rounded-none"
             alt="logo_catoexpress_black"
             src="/images/logo_catoexpress_black.png"
           ></Image>
         </div>
         <div className="flex-col text-center sm:text-left space-y-2 w-full sm:w-1/3">
           <p className="font-bold text-base mb-8">Servicios</p>
           {dataShop.map((item, index) => (
             <p key={index}>
               <Link
                 className="text-sm text-slate-50 font-normal"
                 href={item.url}
               >
                 {item.label}
               </Link>
             </p>
           ))}
         </div>
         <div className="flex flex-col items-center space-y-2 w-full sm:w-1/3">
           <p className="font-bold text-base mb-8 text-center">
             Libro de reclamaciones
           </p>
           <Image
             width={172}
             height={76}
             className="rounded-none"
             alt="libro_reclamaciones"
             src="/images/libro_reclamaciones.png"
           ></Image>
         </div>
       </div>
       <div className="flex mt-10 md:mt-0 w-full md:w-1/2 justify-center md:justify-normal">
         <div className="w-0 md:w-1/3 h-full" />
         <div className="flex-col space-y-4 w-3/5">
           <p className="text-3xl text-center font-thin">Catoexpress</p>
           <div className="flex justify-center space-x-2 text-center">
             <Instagram color="white" size={17}/>
             <Facebook color="white" size={17}/>
             <Twitter color="white" size={17}/>
           </div>
           <div className="text-neutral-300 flex justify-between space-x-3 pt-8">
             <div className="relative w-full bg-transparent border border-white h-10 rounded-md">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="w-4 h-4 absolute left-3 top-2.5"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                 />
               </svg>

               <input
                 type="search"
                 placeholder="Buscar..."
                 className="pl-10 bg-transparent w-full h-full rounded-md"
               />
             </div>
           </div>
         </div>
       </div>
     </div>
     <hr className="border-t-2 border-gray-600" />
   </footer>
  );
};

