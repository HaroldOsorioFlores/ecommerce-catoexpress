import Image from "next/image";
import Link from "next/link";
import { dataServicesCatoexpress } from "@/components/navbar/navbar.data";
import NewSwiper from "@/components/swiper/NewSwiper";

export default function Home() {
  return (
    <>
      <div className="bg-lime-100">
        <Image
          src={"/images/ShopBanner.png"}
          alt={"ShopBanner"}
          width={2000}
          height={2000}
          priority
        />
        <div className="flex flex-col md:flex-row w-full text-tiny pt-10 text-xl text-center px-10 items-center justify-center bg-lime-100">
          <div className="w-full md:w-1/3 px-10 pb-14 md:pb-0">
            <div className="flex justify-center pb-4">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6.00008V4.2844C16 3.51587 16 3.13161 15.8387 2.88321C15.6976 2.66587 15.4776 2.5118 15.2252 2.45345C14.9366 2.38677 14.5755 2.51809 13.8532 2.78073L6.57982 5.4256C6.01064 5.63257 5.72605 5.73606 5.51615 5.91845C5.33073 6.07956 5.18772 6.28374 5.09968 6.51304C5 6.77264 5 7.07546 5 7.6811V12.0001M9 17.0001H15M9 13.5001H15M9 10.0001H15M8.2 21.0001H15.8C16.9201 21.0001 17.4802 21.0001 17.908 20.7821C18.2843 20.5903 18.5903 20.2844 18.782 19.9081C19 19.4802 19 18.9202 19 17.8001V9.20008C19 8.07997 19 7.51992 18.782 7.0921C18.5903 6.71577 18.2843 6.40981 17.908 6.21807C17.4802 6.00008 16.9201 6.00008 15.8 6.00008H8.2C7.0799 6.00008 6.51984 6.00008 6.09202 6.21807C5.71569 6.40981 5.40973 6.71577 5.21799 7.0921C5 7.51992 5 8.07997 5 9.20008V17.8001C5 18.9202 5 19.4802 5.21799 19.9081C5.40973 20.2844 5.71569 20.5903 6.09202 20.7821C6.51984 21.0001 7.07989 21.0001 8.2 21.0001Z"
                  stroke="#79B93C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <b>Variedad</b>
            <p className="text-zinc-400">
              Contamos con una gran variedad de productos
            </p>
          </div>
          <div className="w-full md:w-1/3 px-10 pb-14 md:pb-0">
            <div className="flex justify-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="120"
                height="120"
              >
                <path
                  d="M61.101 40.512h-.411c-.469-12.96-9.983-23.647-22.404-25.928v-3.588a4.96 4.96 0 0 0-4.955-4.955 4.959 4.959 0 0 0-4.952 4.955v3.58A27.27 27.27 0 0 0 6.033 39.464h-3A2.036 2.036 0 0 0 1 41.498v13.753c0 1.121.912 2.033 2.034 2.033h8.348c.962 0 1.766-.672 1.976-1.571l15.007 2.07c.879.121 1.775.178 2.682.178 8.893 0 18.712-5.455 21.583-9.15h8.24c1.007 0 2.13-.75 2.13-1.826v-4.657c0-1.001-.852-1.816-1.899-1.816zM30.38 10.996a2.956 2.956 0 0 1 2.952-2.955 2.958 2.958 0 0 1 2.955 2.955v3.294a27.54 27.54 0 0 0-2.955-.163c-.998 0-1.982.058-2.952.161v-3.292zM11.382 55.284 3 55.251V41.498c0-.019.016-.034.034-.034l8.382.033-.034 13.786zm0-15.82H8.036a25.293 25.293 0 0 1 25.295-23.337c13.661 0 24.83 10.85 25.358 24.385H32.855a178.9 178.9 0 0 1-2.238-.925c-4.023-1.69-4.276-1.703-8.994-.503L13.38 41.14a2.033 2.033 0 0 0-1.998-1.675zm17.256 16.338-15.222-2.1v-10.51l8.7-2.17c4.207-1.07 4.207-1.068 7.727.409.679.285 1.478.62 2.365.973 1.23.625 1.772 1.54 1.524 2.58-.25 1.041-1.212 1.827-2.24 1.827h-5.69a1 1 0 0 0 0 2h24.11c-3.91 3.553-13.497 8.07-21.274 6.99zM61 46.772a.378.378 0 0 1-.13.04H35.09c.267-.411.47-.87.587-1.363a3.927 3.927 0 0 0-.473-2.937H61v4.26z"
                  stroke="#79B93C"
                  strokeWidth="3"
                  fill="#79B93C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <b>Atención</b>
            <p className="text-zinc-400">Atención de manera efectiva</p>
          </div>
          <div className="w-full md:w-1/3 px-10 pb-14 md:pb-0">
            <div className="flex justify-center pb-4">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#79B93C"
                  strokeWidth="2"
                  d="M19,18 L5,18 L19,18 Z M12,18 L12,12 L12,18 Z M15,18 L15,14 L15,18 Z M9,18 L9,14 L9,18 Z M19,22 L19,11.3292943 C20.1651924,10.9174579 21,9.80621883 21,8.5 C21,6.84314575 19.6568542,5.5 18,5.5 C17.6192862,5.5 17.2551359,5.57091725 16.9200387,5.7002623 C16.5495238,3.87433936 14.4600194,2 12,2 C9.53998063,2 7.45047616,3.87433936 7.07996126,5.7002623 C6.74486408,5.57091725 6.38071384,5.5 6,5.5 C4.34314575,5.5 3,6.84314575 3,8.5 C3,9.80621883 3.83480763,10.9174579 5,11.3292943 L5,22 L19,22 Z"
                />
              </svg>
            </div>
            <b>Comida de calidad</b>
            <p className="text-zinc-400">
              Disfruta de nuestras comidas de calidad
            </p>
          </div>
        </div>
        <div className="bg-amber-500 h-100">
          <div className=" m-14">
            <ul className="flex flex-wrap list-image-none md:flex text-center h-90">
              {dataServicesCatoexpress.map((item, index) => (
                <li key={index} className="w-full md:w-1/2 lg:w-1/4">
                  <Link
                    href={`/shopUcsm/${item.name.toLowerCase()}`}
                    className="block px-2 sm:14 md:px-4 hover:bg-gray-100 object-fill py-10 text-gray-50 text-3xl h-full uppercase break-words"
                  >
                    <div className="bg-white w-full h-52">
                      <Image
                        src={"/images/ShopBanner.png"}
                        alt={"ShopBanner"}
                        width={500}
                        height={500}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      ></Image>
                    </div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="px-16 pb-14 h-56">
          <NewSwiper></NewSwiper>
          </div>
        </div>
      </div>
    </>
  );
}
