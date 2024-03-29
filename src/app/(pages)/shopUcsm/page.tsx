import Image from "next/image";
import Link from "next/link";
import { dataServicesCatoexpress } from "@/components/navbar/navbar.data";
import NewSwiper from "@/components/swiper/NewSwiper";
import { getProducts } from "@/services";

import { NotepadText , HandPlatter, ChefHat } from 'lucide-react';

export default async function Home() {
  const fetchData = await getProducts("ceprobis-ucsm")
  return (
    <>
      <div className="bg-lime-100">
        <div className="w-full h-[24rem]">
        <Image
          src={"/images/ShopBanner.png"}
          alt={"ShopBanner"}
          width={2000}
          height={2000}
          priority
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        </div>
        <div className="flex flex-col md:flex-row w-full text-tiny pt-10 text-xl text-center px-10 items-center justify-center bg-lime-100">
          <div className="w-full md:w-1/3 px-10 pb-14 md:pb-0">
            <div className="flex justify-center pb-4">
            <NotepadText size={120} color="#79B93C"/>
            </div>
            <b>Variedad</b>
            <p className="text-zinc-400">
              Contamos con una gran variedad de productos
            </p>
          </div>
          <div className="w-full md:w-1/3 px-10 pb-14 md:pb-0">
            <div className="flex justify-center pb-4">
              <HandPlatter size={120} color="#79B93C"/>
            </div>
            <b>Atención</b>
            <p className="text-zinc-400">Atención de manera efectiva</p>
          </div>
          <div className="w-full md:w-1/3 px-10 pb-14 md:pb-0">
            <div className="flex justify-center pb-4">
            <ChefHat size={120} color="#79B93C"/>
            </div>
            <b>Comida de calidad</b>
            <p className="text-zinc-400">
              Disfruta de nuestras comidas de calidad
            </p>
          </div>
        </div>
        <div className="bg-amber-500 h-100">
          <div className=" m-14">
            <ul className="flex flex-wrap list-image-none md:flex text-center h-90">
              {dataServicesCatoexpress.map((item, index) => (
                <li key={index} className="w-full md:w-1/2 lg:w-1/3 my-10">
                  <Link
                    href={`/shopUcsm/${item.name.toLowerCase()}`}
                    className="block px-2 sm:14 md:px-4 hover:none object-fill text-gray-50 text-3xl h-full uppercase break-words"
                  >
                    <div className="bg-white w-full h-52">
                      <Image
                        src={"/images/ShopBanner.png"}
                        alt={"ShopBanner"}
                        width={500}
                        height={500}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      ></Image>
                    </div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="px-16 pb-14 h-full w-full">
          <NewSwiper data={fetchData}/>
          </div>
        </div>
      </div>
    </>
  );
}
