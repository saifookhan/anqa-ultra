import { BsStars } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 min-h-[100vh] w-full bg-[#01121B] md:px-16">
      <div className="max-w-xl md:mt-12">
        <h1 className="text-[64px] md:text-[64px] font-500 mb-4 leading-tight text-left">
          Build Your Team,
          <br />
          Beyond Limits
        </h1>
        <p className="text-[24px] text-gray-200 mb-8 text-left leading-[150%]">
          ultra. is an AI powered platform connecting organizations with
          independent consultants committed to delivering the extra mile.
        </p>
        <button className="bg-white text-[#0a232f] px-6 py-2 rounded-full font-medium shadow text-left hover:bg-gray-100 transition-colors flex items-center">
          Start{" "}
          <span className="ml-2">
            <BsStars />
          </span>
        </button>
      </div>
      <div className="mt-12 md:mt-0 md:ml-8 flex justify-center items-start w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[500px] h-auto rounded-lg mix-blend-lighten"
        >
          <source src="/videos/shutterstock.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
