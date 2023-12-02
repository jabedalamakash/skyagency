import Image from "next/image";
import Brands from "./Brands";

const fetchData = async () => {
  const reqData = await fetch("https://agency.teamrabbil.com/api/HeroList");
  const resData = await reqData.json();
  // console.log(resData);
  return resData;
};

export default async function HeroSec() {
  const data = await fetchData();
  return (
    <section className="w-full bg-[#D7F5DC]  py-20">
      <main className="w-full md:w-[80%]  mx-auto px-5 md:px-0">

        <div className="flex flex-col-reverse md:flex-row mb-5 mt-48 md:mt-32 md:mb-0 md:space-x-14 ">

          <div className="w-full md:w-1/2  mx-auto md:my-auto items-center">
            <h1 className="font-bold text-center md:text-left text-3xl  md:text-6xl md:leading-relaxed mb-3">Increase Your Customers Loyalty and Satisfaction</h1>
            <p className="text-xl text-center md:text-left tracking-wider">We help businesses like yours earn more customers, standout from competitors, make more money.</p>
          </div>

          <div className="w-full md:w-1/2 mb-10 md:mb-0 mx-auto md:my-auto">
            <div className="flex items-center gap-10">
              <div className="w-[65%] h-full">
              <Image
                    src={data.image2}
                    alt={data.title}
                    height={500}
                    width={500}
                    priority
                    className=" w-full h-full rounded-xl mb-5"
                  />
              </div>
              <div className="w-[35%] h-full">
              <Image
                    src={data.image1}
                    alt={data.title}
                    height={500}
                    width={500}
                    priority
                    className=" w-full h-full rounded-xl mb-5"
                  />
              </div>
            </div>

            <div className="flex items-center gap-10">
             
              <div className="w-[35%]">
              <Image
                    src={data.image4}
                    alt={data.title}
                    height={500}
                    width={500}
                    priority
                    className=" w-full h-full rounded-xl mb-5"
                  />
              </div>
              <div className="w-[65%]">
              <Image
                    src={data.image3}
                    alt={data.title}
                    height={500}
                    width={500}
                    priority
                    className=" w-full h-full rounded-xl mb-5"
                  />
              </div>
            </div>
          </div>
        </div>

      </main>
      <div className="-mt-10 pt-20">
        <Brands/>
        </div>
    </section>
  );
}
