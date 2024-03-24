import { spectral } from "@/fonts"
import { transformUrl } from "@/utils"
import Image from "next/image"




export default function Module({ params }: { params: { module: string } }) {
  const moduleName = transformUrl(params.module)
  const styleImagen = `w-full xl:h-[31.25rem] md:h-[25rem] h-[19rem] object-cover`

  return (
    <main className="">
      <div className=" relative">
        <div>
          {moduleName === "panificadora ucsm" && <Image src={"/images/panificadoraBanner.png"} alt={`${moduleName} modulo`} width={2000} height={2000} priority className={styleImagen} />}
          {moduleName === "cafeteria" && <Image src={"/images/elcholoBanner.png"} alt={`${moduleName} modulo`} width={2000} height={2000} priority className={styleImagen} />}
          {moduleName === "ceprobis ucsm" && <Image src={"/images/ceprobisBanner.png"} alt={`${moduleName} modulo`} width={2000} height={2000} priority className={styleImagen} />}
        </div>
        <div className="max-w-4xl absolute xl:top-96 md:top-72 top-52 w-full">
          <h1 className={`font-extrabold xl:text-6xl md:text-5xl text-3xl uppercase text-white absolute md:ml-16 ml-10 ${spectral.className}`}>{moduleName}</h1>
          <div className="bg-gradient-to-r from-[#314E4E] from-30% via-transparent via-100% w-full md:h-20 h-14"></div>
        </div>
      </div>
    </main>
  )
}
