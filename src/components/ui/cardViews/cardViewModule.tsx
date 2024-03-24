import { ShoppingCart } from "lucide-react"

import Image from "next/image"

export const CardViewModule = ({ product }: { product: IProduct }) => {
  return <div className="max-w-[16rem] bg-transparent border border-gray-200 rounded-lg shadow">
    <Image className="rounded-t-lg h-[15rem] object-cover" src={product.urlImage} alt="" width={2000} height={2000} priority />
    <div className="p-2">
      <h5 className="mb-2 text-[1.5rem] font-bold tracking-tight text-gray-900">{product.title}</h5>
      <p className="mb-3 font-black text-[1.5rem] text-[#FEA90F]">{product.price}</p>
      <button className="inline-flex items-center px-2 py-1 text-lg font-medium text-center text-white uppercase bg-[#79B93C] hover:bg-[#6ca636] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
        añadir
        <ShoppingCart className="ml-2" />
      </button>
    </div>
  </div>
}
