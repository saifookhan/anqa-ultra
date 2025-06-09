import { GiDiamonds } from "react-icons/gi";

export default function TalentsSection() {
  return (
    <section className="px-16 min-h-[100vh] w-full flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Our talents</h3>
        <p className="text-gray-300 mb-12 max-w-2xl text-lg">
          People from ultra. are executive assessed top-performers in top-tier
          consulting and C-level track record across key industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="pb-8 border-b border-gray-700">
            <GiDiamonds className="text-white text-2xl mb-4" />
            <div className="text-2xl font-semibold mb-2">Consultants</div>
            <p className="text-gray-300 text-base">
              Expert consultants with proven track records in top-tier
              consulting firms.
            </p>
          </div>
          <div className="pb-8 border-b border-gray-700">
            <GiDiamonds className="text-white text-2xl mb-4" />
            <div className="text-2xl font-semibold mb-2">
              Interim Executives
            </div>
            <p className="text-gray-300 text-base">
              Seasoned executives ready to step in and drive immediate impact.
            </p>
          </div>
          <div className="pb-8 border-b border-gray-700">
            <GiDiamonds className="text-white text-2xl mb-4" />
            <div className="text-2xl font-semibold mb-2">Industry Experts</div>
            <p className="text-gray-300 text-base">
              Specialized professionals with deep industry knowledge and
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
