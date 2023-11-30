import Image from "next/image";

const fetchData = async () => {
  const reqData = await fetch(
    "https://agency.teamrabbil.com/api/TestimonialList"
  );
  const resData = await reqData.json();
  // console.log(resData);
  return resData;
};
export default async function Testmonial() {
  const data = await fetchData();
  return (
    <section className="w-full py-20">
      <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
        <h3 className="uppercase text-[#20B15A] pb-5 text-xl font-semibold">
          Testimonial List
        </h3>
        <h1 className="text-2xl pb-10 font-bold">
          Better Agency/SEO Solution AT Your Fingertips
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          {data.map((item) => {
            return (
              <div key={item.id} className="">
                <div className="w-full mb-5 md:mb-0 p-12  bg-white shadow-2xl rounded-xl border border-gray-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    // placeholder="blur"
                    height={500}
                    width={500}
                    priority
                    className=" w-[35%] h-[25%] mx-auto rounded-xl mb-5"
                  />
                  <p className="text-center md:text-left mb-5 text-grey-500">{item.msg}</p>
                  <h4 className="uppercase mb-3 text-center font-semibold text-2xl">
                    {item.name}
                  </h4>
                  <p className="text-center">{item.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}
