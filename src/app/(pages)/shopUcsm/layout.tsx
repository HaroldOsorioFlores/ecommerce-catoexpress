import { Footer } from "@/components";
import { NavbarShopUcsm } from "@/components/navbar/navbarShopUcsm";

export default function ShopUcsmLayout({ children }: { children: React.ReactNode }) {
  return <>
    <header>
      <NavbarShopUcsm />
    </header>
    {children}
    <footer>
      <Footer />
    </footer>

  </>
}
