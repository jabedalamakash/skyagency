import Image from "next/image";

const fetchData = async () => {
  const reqData = await fetch("https://agency.teamrabbil.com/api/AllProject");
  const resData = reqData.json();
  return resData;
};
export default async function AllProjects() {
  const data = await fetchData();
  // console.log(data)
  return (
    <section className="w-full py-20">
      <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
        <h3 className="uppercase text-[#20B15A] pb-5 text-xl font-semibold">
          All Projects
        </h3>
        <h1 className="text-2xl pb-10 font-bold">
          Better Agency/SEO Solution AT Your Fingertips
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
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
                    className=" w-full h-full rounded-xl mb-5"
                  />
                  <h4 className="uppercase text-center md:text-left font-semibold text-2xl">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}
