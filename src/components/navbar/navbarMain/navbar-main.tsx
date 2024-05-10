import { StyledButton } from "@/components/ui";
import { Navbar } from "../ui";
import { NavbarMainButtons } from "./navbar-main-buttons";

export const NavbarMain = () => {
  return (
    <header>
      <Navbar>
        <div className="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
          <NavbarMainButtons />
        </div>
      </Navbar>
    </header>
  );
};
