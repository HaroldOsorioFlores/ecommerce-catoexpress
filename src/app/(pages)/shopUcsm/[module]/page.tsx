import { transformUrl } from "@/utils"
import Image from "next/image"

export default function Module({ params }: { params: { module: string } }) {
  const moduleName = transformUrl(params.module)

  return (
    <>
      {moduleName === "como en casa ucsm" && <Image src={"/images/comoencasaBanner.png"} alt={`${moduleName} modulo`} width={2000} height={2000} priority />}
      {moduleName === "panificadora ucsm" && <Image src={"/images/panificadoraBanner.png"} alt={`${moduleName} modulo`} width={2000} height={2000} priority />}
      {moduleName === "el cholo ucsm" && <Image src={"/images/elcholoBanner.png"} alt={`${moduleName} modulo`} width={2000} height={2000} priority />}
      {moduleName === "ceprobis ucsm" && <Image src={"/images/ceprobisBanner.png"} alt={`${moduleName} modulo`} width={2000} height={2000} priority />}
    </>
  )
}
