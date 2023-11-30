import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const fetchData = async () => {
  const reqData = await fetch("https://agency.teamrabbil.com/api/TeamList");
  const resData = reqData.json();
  //  console.log(resData);
  return resData;
};

export default async function Teamlist() {
  const data = await fetchData();
  return (
    <section className="w-full">
      <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
        <h3 className="uppercase text-[#20B15A] pb-5 text-xl font-semibold">
          Our Team Members
        </h3>
        <h1 className="text-2xl pb-10 font-bold">
          Check our awosome team members{" "}
        </h1>

        <div className="flex flex-col md:flex-row gap-10 justify-between py-10 ">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="w-full mb-5 md:mb-0 bg-white shadow-2xl rounded-xl border border-gray-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    // placeholder="blur"
                    height={500}
                    width={500}
                    priority
                    className=" w-full h-full"
                  />

                  <h3 className=" text-center py-3 font-bold">{item.name}</h3>
                  <div className=" flex justify-center mb-5 gap-5 items-center bg-white p-3 rounded-l-full  rounded-r-full ">
                    
                    <Link href={`https://${item.facebook}`}>
                    <FaFacebookF size={15} />
                    </Link>
                    <Link href={`https://${item.twiter}`}>
                    <FaTwitter size={15} />
                    </Link>
                    <Link href={`https://${item.instagram}`}>
                    <FaInstagram size={15} />
                    </Link>
                    
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}
