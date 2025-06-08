import {
  FaTasks,
  FaRobot,
  FaMoneyCheckAlt,
  FaHandshake,
  FaBolt,
} from "react-icons/fa";

export default function HowUltraWorks() {
  return (
    <section className="px-16 py-12">
      <h3 className="text-2xl font-semibold mb-2">How ultra. works</h3>
      <p className="text-gray-300 mb-8 max-w-2xl">
        ultra. combines human touch and AI powered technology to help companies
        building their elite consulting team within a few hours.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        <div className="bg-[#112534] rounded-lg p-6 flex flex-col justify-between min-h-[140px] relative col-start-1 row-start-1">
          <FaTasks className="absolute top-4 right-4 text-xl text-gray-200 opacity-80" />
          <div className="text-lg font-semibold mb-1">Project Scoping</div>
          <div className="text-gray-300 text-sm">
            Full framing of your project requirements with our team.
          </div>
        </div>
        <div className="bg-[#112534] rounded-lg p-6 flex flex-col justify-between min-h-[140px] relative col-start-2 row-start-1">
          <FaRobot className="absolute top-4 right-4 text-xl text-gray-200 opacity-80" />
          <div className="text-lg font-semibold mb-1">AI Matching</div>
          <div className="text-gray-300 text-sm">
            Candidate matching an qualification powered by our AI matching tool.
          </div>
        </div>
        <div className="bg-[#112534] rounded-lg p-6 flex flex-col justify-between min-h-[296px] relative col-start-3 row-start-1 row-span-2">
          <FaBolt className="absolute top-4 right-4 text-xl text-gray-200 opacity-80" />
          <div className="text-lg font-semibold mb-1">Fast interviews</div>
          <div className="text-gray-300 text-sm">
            Fast interview process with available consultants within hours.
          </div>
        </div>
        <div className="bg-[#112534] rounded-lg p-6 flex flex-col justify-between min-h-[140px] relative col-start-1 row-start-2">
          <FaMoneyCheckAlt className="absolute top-4 right-4 text-xl text-gray-200 opacity-80" />
          <div className="text-lg font-semibold mb-1">Pay as you go</div>
          <div className="text-gray-300 text-sm">
            Success based pricing model. No subscription, no retainer.
          </div>
        </div>
        <div className="bg-[#112534] rounded-lg p-6 flex flex-col justify-between min-h-[140px] relative col-start-2 row-start-2">
          <FaHandshake className="absolute top-4 right-4 text-xl text-gray-200 opacity-80" />
          <div className="text-lg font-semibold mb-1">
            Secured Contracts and Payments
          </div>
          <div className="text-gray-300 text-sm">
            Secured online contracting, time tracking and invoicing process.
          </div>
        </div>
      </div>
    </section>
  );
}
