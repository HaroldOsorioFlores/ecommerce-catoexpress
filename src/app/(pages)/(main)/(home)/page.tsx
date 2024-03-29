import { The_Girl_Next_Door } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";

const theGirlNextDoor = The_Girl_Next_Door({
  weight: '400',
  subsets: ['latin'],
  display: 'auto',
})

export default function Home() {
  return (
    <main>
      <Link href={"shopUcsm"} className="text-blue-700">
        Presiona aqui para dirigirte al home
      </Link>
      <div className="px-28 text-5xl text-center font-serif bg-green-main">
        <p className="text-orange-400 text-6xl px-5 font-extrabold py-9">
          Bienvenido a CATOEXPRESS
        </p>
        <p className=" pb-9">¿Quieres ahorrar desde el primer click?</p>
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src="/images/bgFrase.png"
            alt="Fondo"
            objectFit="contain"
            priority
            width={2000}
            height={2000}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around w-full p-12">
            <div className="w-1/3">
              <Image
                src="/images/ShopBanner.png"
                alt="Imagen encima"
                width={500}
                height={500}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="w-7/12 text-left px-5 text-7xl text-white">
              <p className={theGirlNextDoor.className}>Tu primera compra nunca fué tan especial!</p>
            </div>
          </div>
        </div>
        <p className="font-bold text-4xl px-48 py-11">
          Regístrate ahora y desbloquea un cupón de descuento exclusivo
        </p>

        <button className="p-2 mb-8 text-3xl text-white bg-green-600 border-5 border-green-500 hover:bg-green-700 rounded-lg">
          Adquirir cupón
        </button>
      </div>
    </main>
  );
}
