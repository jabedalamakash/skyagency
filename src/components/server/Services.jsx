import Image from "next/image";

const fetchDataService = async () => {
  const reqData = await fetch("https://agency.teamrabbil.com/api/AllService");
  const resData = await reqData.json();
  // console.log(resData);
  return resData;
};

export default async function Services() {
  const data = await fetchDataService();
  return (
    <section className="w-full py-20 ">
      <article className="w-full md:w-[80%] mx-auto py-20 px-5 md:px-0">
        <h1 className="uppercase text-[#20B15A] text-center md:text-left pb-5 text-xl font-semibold">
          Our All Services
        </h1>
        <h1 className="text-2xl text-center md:text-left pb-10 font-bold">
          We Provide Best Web Design Services
        </h1>
        <main className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {data.map((item) => {
            return (
              <div key={item.id} className="bg-white shadow-xl border border-gray-300 rounded-xl p-10">
                {/* <div className="gap-10 "> */}
                <h1 className="uppercase text-center md:text-left font-semibold text-2xl py-5">
                  {item.title}
                </h1>
                <p className="pb-5 text-center md:text-left text-gray-500">{item.des}</p>
                <div className=" w-full flex-wrap flex">
                  <div className="flex gap-5  py-5">
                    <div className="w-[65%]">
                      <Image
                        src={item.image1}
                        alt={item.tag}
                        // placeholder="blur"
                        height={500}
                        width={500}
                        priority
                        className="w-full h-full rounded-xl"
                      />
                    </div>
                    <div className="w-[35%]">
                      <Image
                        src={item.image2}
                        alt={item.tag}
                        // placeholder="blur"
                        height={500}
                        width={500}
                        priority
                        className=" w-full h-full rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="flex w-full items-center py-5 gap-5">
                    <div className="w-[50%] ">
                      <Image
                        src={item.image3}
                        alt={item.tag}
                        // placeholder="blur"
                        height={500}
                        width={500}
                        priority
                        className="w-full rounded-xl"
                      />
                    </div>
                    <div className="w-[50%]">
                      <Image
                        src={item.image4}
                        alt={item.tag}
                        // placeholder="blur"
                        height={500}
                        width={500}
                        priority
                        className="w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </article>
    </section>
  );
}
