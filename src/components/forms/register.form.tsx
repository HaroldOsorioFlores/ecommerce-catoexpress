"use client";

import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";

import { ButtonSubmit } from "../ui";
import { RegisterAction } from "@/actions";

const initialFormState = {
  msg: "",
};

export const RegisterForm = () => {
  const [state, formState] = useFormState(RegisterAction, initialFormState);
  console.log({ state });
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="md:h-[111.14px] md:max-w-52 h-20 max-w-44 mx-auto">
          <Image
            alt="logo catoexpress formulario"
            src={"/images/logo-catoexpress-formulario.png"}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-2">
          <span className="text-gray-700 md:text-xl">Bienvenido !</span>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Crear Cuenta
          </h1>
        </div>
        <form className="space-y-4 md:space-y-6" action={formState}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Correo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="usuario@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full
              p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500">
                Aceptar
                <Link
                  className="font-medium text-primary-600 hover:underline ml-1"
                  href="#"
                >
                  Terminos y condiciones
                </Link>
              </label>
            </div>
          </div>
          <ButtonSubmit
            content="Iniciar"
            className="w-full bg-primary-600 hover:bg-primary-700"
          />

          <p className="text-sm font-light text-gray-500">
            No tienes una cuenta?
            <Link
              href="#"
              className="font-medium text-primary-600 hover:underline ml-1"
            >
              Crear
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
