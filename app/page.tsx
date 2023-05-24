import Report from "./(home)/report";
import Navbar from "./(shared)/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <Navbar />
      </div>

      <Report />

      <div className="grid mb-4 text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
        <a
          href="/tickets"
          className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            See All Tickets{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  );
}
