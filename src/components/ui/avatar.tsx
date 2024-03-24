"use client"

import Link from "next/link";
import { useState } from "react";

export const Avatar = ({ name }: { name: string }) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false)

  // const { removeUser } = useDataUserStore()

  const initialName = () => {
    let value = name.split(" ");
    let newName = ""
    if (value.length > 1) newName = value[0].charAt(0) + value[1].charAt(0);
    else newName = value[0].charAt(0)
    return newName;
  };
  const newName = initialName();

  return (
    <div
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropDown(false);
      }}
      className="relative mx-auto"
    >
      <button
        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-primary rounded-full bg-[#246D19] hover:bg-[#1d5814]"
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        <span className="text-white font-semibold">{newName}</span>
      </button>

      {/* dropdown-menu */}
      {openDropDown && (
        <div
          id="userDropdown"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg right-0 w-[27.6875rem] mt-[2.6875rem] shadow-[4px_4px_16.3px_0px_#00000024]"
        >
          <div className="px-4 py-3 text-sm text-gray-900">
            <Link href={`/perfil/UserEjemplo`} className="block">
              {name}
            </Link>
            <div className="font-medium truncate">user@user.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="avatarButton"
          >
            <li>
              <Link
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Ayuda y soporte técnico
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Favoritos
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <button
              // onClick={() => removeUser()}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
