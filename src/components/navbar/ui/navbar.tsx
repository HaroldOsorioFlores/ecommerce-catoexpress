import Image from "next/image";
import Link from "next/link";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="bg-secondary-500 fixed w-full z-20 top-0 start-0 border-b border-gray-200 h-[4.5rem] md:h-20 flex items-center">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse w-full max-w-24 md:max-w-32"
        >
          <Image
            src={"/images/logo_catoexpress_black.png"}
            alt="logo catoexpress"
            width={500}
            height={500}
            className="h-full w-full max-w-24 md:max-w-32 aspect-auto"
            priority
          />
        </Link>
        {children}
      </div>
    </nav>
  );
};
