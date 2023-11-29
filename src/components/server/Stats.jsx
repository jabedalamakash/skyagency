import Image from "next/image";

const fetchData = async () => {
  const reqData = await fetch("https://agency.teamrabbil.com/api/StatList");
  const resData = await reqData.json();
  //  console.log(resData);
  return resData;
};
export default async function Stats() {
  const data = await fetchData();
  return (
    <section className="w-full">
      <main className="w-full md:w-[80%] mx-auto py-10  md:py-20 px-5 md:px-0">
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between">
          <div className="bg-white shadow-xl p-10 md:px-20 md:py-10   rounded-xl">
            <Image
              src={"/icons/group.png"}
              height={100}
              width={100}
              alt={"follower"}
              className="bg-[#D7F5DC] mx-auto rounded-xl mb-5 p-10"
            />
            <p className="text-center text-2xl mb-3 font-bold">
              {data.followers}
            </p>
            <p className="text-center font-semibold">Followers</p>
          </div>

          <div className="bg-white shadow-xl p-10 md:px-20 md:py-10   rounded-xl">
            <Image
              src={"/icons/happy.png"}
              height={100}
              width={100}
              alt={"happy"}
              className="bg-[#D7F5DC] mx-auto rounded-xl mb-5 p-10"
            />
            <p className="text-center text-2xl mb-3   font-bold">
              {data.solved}
            </p>
            <p className="text-center font-semibold">Solved Problems</p>
          </div>
          <div className="bg-white shadow-xl p-10 md:px-20 md:py-10 rounded-xl">
            <Image
              src={"/icons/like.png"}
              height={100}
              width={100}
              alt={"like"}
              className="bg-[#D7F5DC] mx-auto rounded-xl  mb-5 p-10"
            />
            <p className="text-center text-2xl mb-3  font-bold">
              {data.customers}
            </p>
            <p className="text-center font-semibold">Happy Customers</p>
          </div>
          <div className="bg-white shadow-xl p-10 md:px-20 md:py-10  rounded-xl">
            <Image
              src={"/icons/scan.png"}
              height={100}
              width={100}
              alt={"scan"}
              className="bg-[#D7F5DC] mx-auto rounded-xl mb-5  p-10"
            />
            <p className="text-center text-2xl mb-3 font-bold">
              {data.projects}
            </p>
            <p className="text-center font-semibold">Projects</p>
          </div>
        </div>
      </main>
    </section>
  );
}
