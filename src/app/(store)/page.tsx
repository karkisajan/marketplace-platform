export default function StorePage() {
  return (
    <div className="bg-white">
      <section className="bg-zinc-50">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <h1 className="max-w-xl text-5xl font-bold leading-tight text-black md:text-6xl">
              Discover what&apos;s nearby
            </h1>
            <p className="mt-5 max-w-lg text-xl leading-8 text-zinc-600">
              Find local products, categories and stores in one clean
              marketplace.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["Categories", "Products", "Stores"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-zinc-200 bg-white p-6 text-center text-lg font-semibold text-zinc-900 shadow-sm cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
