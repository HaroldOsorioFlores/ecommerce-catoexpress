"use client"

import { useEffect, useState } from "react";
import { ChevronDown } from 'lucide-react';


import Link from "next/link";
import { useRouter } from "next/navigation";

import { dataNavbar, dataServicesCatoexpress } from "../navbar.data";


export const NavbarMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMenu]);

  return (
    openMenu && (
      <div className="md:hidden w-screen" id="navbar-hamburger">
        <ul className="flex flex-col absolute z-20 w-full h-full font-medium bg-white border-gray-700 gap-5 p-4 overflow-y-hidden">
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center w-full py-2 px-3 md:border-0md:p-0 md:w-auto text-gray-900 hover:bg-gray-200"
            >
              Servicios
              <ChevronDown />
            </button>
            {openDropdown && (
              <div
                id="dropdownNavbar"
                className=" font-normal divide-y rounded-lg divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-900"
                  aria-labelledby="dropdownLargeButton"
                >
                  {dataServicesCatoexpress.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/categorias/${item.name.toLowerCase()}`}
                        className="block px-4 py-2  hover:bg-gray-200"
                        onClick={() => setOpenMenu(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {dataNavbar.map((item, index) => (
            <li key={index}>
              <Link
                href="/"
                className="block py-2 px-3 rounded-md text-gray-900 hover:bg-gray-200"
                aria-current="page"
                onClick={() => setOpenMenu(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-100 font-bold"
              href={"/categorias"}
              onClick={() => setOpenMenu(false)}
            >
              ver todo
            </Link>
          </li>
          <li className="max-w-md self-center">
            <div className="flex flex-wrap w-full gap-3">
              <button
                className="text-white bg-green-500 hover:bg-green-700"
                onClick={() => {
                  router.push("/inicioUsuario");
                  setOpenMenu(false);
                }}
              >
                Ingresar
              </button>
              <button
                className="text-green-500 bg-white border-2 border-green-500 hover:text-green-700 hover:border-green-700"
                onClick={() => {
                  router.push("/registroUsuario");
                  setOpenMenu(false);
                }}
              >
                Registrarse
              </button>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};
