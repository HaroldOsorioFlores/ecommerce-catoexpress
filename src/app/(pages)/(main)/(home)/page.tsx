import Image from "next/image";
import { ConciergeBell, Donut, MapPin } from "lucide-react";

import { theGirlNextDoor, vidaLoka } from "@/fonts";
import { StyledButton } from "@/components";

export default function Home() {
  return (
    <main className="md:my-20 my-16 space-y-10">
      <section className="bg-secondary-50 py-10 px-5">
        <div className="flex flex-col justify-center items-center space-y-7 md:space-y-10 max-w-screen-2xl mx-auto ">
          <p className="text-tertiary-500 text-2xl md:text-6xl font-extrabold drop-shadow-md text-center">
            Bienvenido a CATOEXPRESS
          </p>
          <p
            className={`text-zinc-700 text-xl font-semibold md:text-5xl text-center ${vidaLoka.className}`}
          >
            ¿Quieres ahorrar desde el primer click?
          </p>
          <div className="relative max-w-[67.5rem] md:h-[24rem] h-28">
            <Image
              src={"/images/bgFrase.png"}
              width={1000}
              height={1000}
              alt="imagen de fondo catoexpress frase"
              className="w-full h-full object-center object-cover"
            />
            <div className="absolute top-0 flex justify-center items-center w-full h-full">
              <div className="flex justify-center items-center gap-7 px-5">
                <p
                  className={`text-white order-2 md:text-5xl text-pretty max-w-[27rem] ${theGirlNextDoor.className}`}
                >
                  Tu primera compra nunca fue tan especial !
                </p>
                <div className="md:h-64 h-20">
                  <Image
                    src={"/images/causahome.png"}
                    width={1000}
                    height={1000}
                    alt="imagen producto causa frase"
                    className="w-full h-full md:max-w-80 max-w-36"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl font-semibold md:text-4xl text-center text-gray-800">
            Regístrate ahora y desbloquea un cupón de descuento exclusivo
          </p>
          <StyledButton option="tertiary">Adquirir cupón</StyledButton>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto px-5">
        <div className="flex flex-wrap gap-8 w-full justify-around">
          <div className="space-y-2 flex flex-col items-center max-w-64 text-center">
            <MapPin className="w-32 h-32 fill-secondary-500 stroke-white" />
            <h5 className="text-gray-900 font-semibold text-xl">Variedad</h5>
            <p className="text-gray-700">Contamos con una gran variedad de productos</p>
          </div>
          <div className="space-y-2 flex flex-col items-center max-w-64 text-center">
            <ConciergeBell className="w-24 h-32 fill-secondary-500 stroke-white bg-secondary-500 rounded-lg p-2" />
            <h5 className="text-gray-900 font-semibold text-xl">Atención</h5>
            <p className="text-gray-700">Atención de manera efectiva</p>
          </div>
          <div className="space-y-2 flex flex-col items-center max-w-64 text-center">
            <Donut className="w-32 h-32 fill-secondary-500 stroke-white" />
            <h5 className="text-gray-900 font-semibold text-xl">
              Comida de Calidad
            </h5>
            <p className="text-gray-700">Disfruta nuestras comidas de calidad</p>
          </div>
        </div>
      </section>
    </main>
  );
}
