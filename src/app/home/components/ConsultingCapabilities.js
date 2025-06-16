import { GiDiamonds } from "react-icons/gi";

export default function ConsultingCapabilities() {
  return (
    <section
      id="capabillities"
      className="px-4 min-h-[100vh] w-full flex flex-col justify-center md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-full md:max-w-xl">
            <h3 className="text-3xl font-semibold mb-6">
              End to end consulting capabilities
            </h3>
            <p className="text-gray-300 text-lg">
              From strategy design to implementation, ultra. supports the whole
              consulting value chain to lead ambitious transformations to the
              finish line.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start relative">
              <div
                className="absolute left-4 top-8 bottom-8 w-px z-0"
                style={{
                  background:
                    "linear-gradient(to bottom, #fff3 0%, #fff2 50%, #fff0 100%)",
                }}
              />
              <div className="flex items-center mb-12 relative z-10 group">
                <GiDiamonds className="text-white mr-4 text-lg group-hover:text-blue-400 transition-colors" />
                <span className="text-xl font-medium group-hover:text-blue-400 transition-colors">
                  Strategy
                </span>
              </div>
              <div className="flex items-center mb-12 relative z-10 group">
                <GiDiamonds className="text-white mr-4 text-lg group-hover:text-blue-400 transition-colors" />
                <span className="text-xl font-medium group-hover:text-blue-400 transition-colors">
                  M&A - Private Equity
                </span>
              </div>
              <div className="flex items-center mb-12 relative z-10 group">
                <GiDiamonds className="text-white mr-4 text-lg group-hover:text-blue-400 transition-colors" />
                <span className="text-xl font-medium group-hover:text-blue-400 transition-colors">
                  Operational Excellence
                </span>
              </div>
              <div className="flex items-center relative z-10 group">
                <GiDiamonds className="text-white mr-4 text-lg group-hover:text-blue-400 transition-colors" />
                <span className="text-xl font-medium group-hover:text-blue-400 transition-colors">
                  Digital Transformation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
