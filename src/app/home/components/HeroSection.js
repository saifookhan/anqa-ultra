import { WiStars } from "react-icons/wi";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-16 min-h-[100vh] w-full bg-[#0a232f]">
      <div className="max-w-xl md:mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-left">
          Build Your Team,
          <br />
          Beyond Limits
        </h1>
        <p className="text-lg text-gray-200 mb-8 text-left">
          ultra. is an AI powered platform connecting organizations with
          independent consultants committed to delivering the extra mile.
        </p>
        <button className="bg-white text-[#0a232f] px-6 py-2 rounded-full font-medium shadow text-left hover:bg-gray-100 transition-colors flex items-center">
          Start{" "}
          <span className="ml-2">
            <WiStars />
          </span>
        </button>
      </div>
      <div className="mt-12 md:mt-0 md:ml-8 flex justify-center items-start">
        {/* Replace with actual 3D blob image if available */}
        <img
          src="/blob-placeholder.png"
          alt="3D Blob"
          className="w-72 h-72 object-contain"
        />
      </div>
    </section>
  );
}
