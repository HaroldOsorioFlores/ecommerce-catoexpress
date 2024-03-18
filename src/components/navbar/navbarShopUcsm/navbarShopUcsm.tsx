"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

import { BadgeShopCart, BtnCollapse, NavbarMenu } from "."
import { Avatar, dataNavbar, dataServicesCatoexpress } from "@/components"


export const NavbarShopUcsm = () => {
  const [openDropdown, setOpenDropDown] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <nav className=" bg-[#79B93C] border-gray-200">
      <div className="md:max-w-screen-2xl flex flex-wrap md:flex-nowrap items-center justify-between md:mx-auto p-4 gap-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl text-white normal-case font-bold">
            CatoExpress
          </span>
        </Link>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   border-gray-700">
            <li onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpenDropDown(false)}>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                onClick={() => setOpenDropDown(!openDropdown)}
                className="flex items-center justify-between w-full py-2 px-3 hover:border-yellow-400 md:p-0 md:w-auto focus:border-yellow-400 border-b-2 border-transparent font-semibold text-white"
              >
                Servicios
                <ChevronDown className="w-5 h-5 ml-1" />
              </button>
              {openDropdown && (
                <div
                  id="dropdownNavbar"
                  className="z-10 font-normal divide-y rounded-lg w-44 bg-white divide-gray-600 absolute shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                >
                  <ul
                    className="py-2 text-sm text-black "
                    aria-labelledby="dropdownLargeButton"
                  >
                    {dataServicesCatoexpress.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/shopUcsm/${item.name.toLowerCase()}`}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setOpenDropDown(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-100 font-bold"
                        href={"/categorias"}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Ver todo
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {dataNavbar.map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="block py-2 px-3 border-transparent md:p-0 md:hover:border-yellow-400 md:hover:bg-transparent border-b-2 font-semibold text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="navbar-buttons" className="md:flex md:justify-center md:items-center gap-2 hidden">
          {/* {Object.values(userLogin)[0].length === 0 && <>
            <LoginForm />
            <RegisterForm />
          </>}
          {Object.values(userLogin)[0].length > 1 && <Avatar name="Harold" />} */}
          <BadgeShopCart />
          <button className="px-4 py-2 hover:bg-[#6ca636] rounded-lg text-white font-semibold">Iniciar</button>
          <button className="px-4 py-2 bg-[#246D19] hover:bg-[#1d5814] rounded-lg text-white font-semibold">Registrarse</button>
          <Avatar name="Harold" />
        </div>
        {!openMenu ? (
          <BtnCollapse
            span="Open main menu"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Menu />
          </BtnCollapse>
        ) : (
          <BtnCollapse
            span="Close main menu"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <X className="uppercase font-extrabold w-7 h-7 " />
          </BtnCollapse>
        )}
      </div>
      <div className="flex flex-wrap justify-between">
        <NavbarMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </nav>)
}
