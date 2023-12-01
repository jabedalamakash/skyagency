import Skelton from "@/components/server/Skelton";

export default function Loading() {
  return (
    <section className="w-full py-10">
      <main className="w-full md:w-[80%] py-20 mx-auto px-5 md:px-0">
        <div className="flex flex-col justify-center md:justify-around  space-y-5 md:space-y-0 md:flex-row md:space-x-6">
          <section className="w-full flex justify-center ">
            <Skelton />
          </section>
          <section className="w-full my-10  flex justify-center ">
            <Skelton />
          </section>
          <section className="w-full flex justify-center ">
            <Skelton />
          </section>
        </div>
      </main>
    </section>
  );
}
