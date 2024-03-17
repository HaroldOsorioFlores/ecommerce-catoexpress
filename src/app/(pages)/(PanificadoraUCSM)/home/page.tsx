import Banner from "@/components/common/Banner/Banner";

const PanificadoraUCSM = async () => {

  return (
    <section className="flex flex-col items-center gap-8 mb-10">
      <section className="">
        <Banner name={"PANIFICADORA"} img_src={"/images/banner_panificadora.png"}/>
      </section>
    </section>
  );
};

export default PanificadoraUCSM;