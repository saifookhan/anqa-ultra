import {
  FaTasks,
  FaRobot,
  FaMoneyCheckAlt,
  FaHandshake,
  FaBolt,
} from "react-icons/fa";

export default function HowUltraWorks() {
  return (
    <section className="px-16 min-h-[100vh] w-full flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl mb-4">How ultra. works</h3>
        <p className="text-gray-300 mb-12 max-w-2xl text-lg">
          ultra. combines human touch and AI powered technology to help
          companies building their elite consulting team within a few hours.
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          <div className="bg-[#112534] rounded-lg p-8 flex flex-col justify-between min-h-[180px] relative col-start-1 row-start-1 hover:bg-[#1a2f42] transition-colors">
            <FaTasks className="absolute top-6 right-6 text-2xl text-gray-200 opacity-80" />
            <div className="text-xl font-semibold mb-2">Project Scoping</div>
            <div className="text-gray-300 text-base">
              Full framing of your project requirements with our team.
            </div>
          </div>
          <div className="bg-[#112534] rounded-lg p-8 flex flex-col justify-between min-h-[180px] relative col-start-2 row-start-1 hover:bg-[#1a2f42] transition-colors">
            <FaRobot className="absolute top-6 right-6 text-2xl text-gray-200 opacity-80" />
            <div className="text-xl font-semibold mb-2">AI Matching</div>
            <div className="text-gray-300 text-base">
              Candidate matching an qualification powered by our AI matching
              tool.
            </div>
          </div>
          <div className="bg-[#112534] rounded-lg p-8 flex flex-col justify-between min-h-[380px] relative col-start-3 row-start-1 row-span-2 hover:bg-[#1a2f42] transition-colors">
            <FaBolt className="absolute top-6 right-6 text-2xl text-gray-200 opacity-80" />
            <div className="text-xl font-semibold mb-2">Fast interviews</div>
            <div className="text-gray-300 text-base">
              Fast interview process with available consultants within hours.
            </div>
          </div>
          <div className="bg-[#112534] rounded-lg p-8 flex flex-col justify-between min-h-[180px] relative col-start-1 row-start-2 hover:bg-[#1a2f42] transition-colors">
            <FaMoneyCheckAlt className="absolute top-6 right-6 text-2xl text-gray-200 opacity-80" />
            <div className="text-xl font-semibold mb-2">Pay as you go</div>
            <div className="text-gray-300 text-base">
              Success based pricing model. No subscription, no retainer.
            </div>
          </div>
          <div className="bg-[#112534] rounded-lg p-8 flex flex-col justify-between min-h-[180px] relative col-start-2 row-start-2 hover:bg-[#1a2f42] transition-colors">
            <FaHandshake className="absolute top-6 right-6 text-2xl text-gray-200 opacity-80" />
            <div className="text-xl font-semibold mb-2">
              Secured Contracts and Payments
            </div>
            <div className="text-gray-300 text-base">
              Secured online contracting, time tracking and invoicing process.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
