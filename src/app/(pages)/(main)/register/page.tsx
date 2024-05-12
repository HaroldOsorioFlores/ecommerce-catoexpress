import { RegisterForm } from "@/components";
import Image from "next/image";

export default function Register() {
  return (
    <main className="md:mt-20 mt-[4.5rem] px-4 py-10 bg-secondary-50">
      <section className="w-full flex justify-center gap-10 items-center flex-row-reverse">
        <RegisterForm />
        <div className="max-w-xl w-full h-[374px] max-h-96 md:block hidden">
          <Image
            alt="logo catoexpress formulario"
            src={"/images/empanada.png"}
            width={500}
            height={500}
            className="w-full h-full md:flex hidden drop-shadow-2xl"
          />
        </div>
      </section>
    </main>
  );
}
