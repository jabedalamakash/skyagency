export default function Loading() {
  return (
    <section className="w-full py-20">
      <main className="w-full md:w-[80%] py-20 mx-auto px-5 md:px-0">
        loading
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      </main>
    </section>
  );
}
