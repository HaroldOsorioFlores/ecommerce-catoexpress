import { ShoppingCart } from "lucide-react"

export const BadgeShopCart = () => {
  return <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-[#6ca636]">
    <ShoppingCart className="text-white" />
    <span className="sr-only">Carrito de compras</span>
    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#FFCB45] border-white rounded-full -top-0 -end-0">20</div>
  </button>
}
