import { FaStarOfLife } from "react-icons/fa";

export default function ConsultingCapabilities() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start px-16 py-16">
      <div className="max-w-md mb-8 md:mb-0">
        <h3 className="text-xl font-semibold mb-2">
          End to end consulting capabilities
        </h3>
        <p className="text-gray-300">
          From strategy design to implementation, ultra. supports the whole
          consulting value chain to lead ambitious transformations to the finish
          line.
        </p>
      </div>
      <div className="flex flex-col items-start ml-0 md:ml-16">
        <div className="flex flex-col items-start relative min-h-[180px]">
          <div
            className="absolute left-3 top-7 bottom-7 w-px z-0"
            style={{
              background:
                "linear-gradient(to bottom, #fff3 0%, #fff2 50%, #fff0 100%)",
            }}
          />
          <div className="flex items-center mb-8 relative z-10">
            <FaStarOfLife className="text-white mr-3 text-xs" />
            <span className="text-base font-medium">Strategy</span>
          </div>
          <div className="flex items-center mb-8 relative z-10">
            <FaStarOfLife className="text-white mr-3 text-xs" />
            <span className="text-base font-medium">M&A - Private Equity</span>
          </div>
          <div className="flex items-center relative z-10">
            <FaStarOfLife className="text-white mr-3 text-xs" />
            <span className="text-base font-medium">
              Operational Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
