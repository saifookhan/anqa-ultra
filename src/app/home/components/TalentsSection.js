import { GiDiamonds } from "react-icons/gi";

export default function TalentsSection() {
  return (
    <section className="px-4 min-h-[100vh] w-full flex flex-col justify-center md:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Our talents</h3>
        <p className="text-gray-300 mb-12 max-w-2xl text-lg">
          People from ultra. are executive assessed top-performers in top-tier
          consulting and C-level track record across key industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group relative cursor-pointer p-4 rounded-lg transition-all duration-300">
            <div className="pb-8">
              <GiDiamonds className="text-white text-2xl mb-4" />
              <div className="text-2xl font-semibold mb-2">Consultants</div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-gray-300 text-base">
                  Expert consultants with proven track records in top-tier
                  consulting firms.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[-50px] left-0 w-full h-[2px] bg-white transform translate-y-[-50px] group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="group relative cursor-pointer p-4 rounded-lg transition-all duration-300">
            <div className="pb-8">
              <GiDiamonds className="text-white text-2xl mb-4" />
              <div className="text-2xl font-semibold mb-2">
                Interim Executives
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-gray-300 text-base">
                  Seasoned executives ready to step in and drive immediate
                  impact.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[-50px] left-0 w-full h-[2px] bg-white transform translate-y-[-50px] group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="group relative cursor-pointer p-4 rounded-lg transition-all duration-300">
            <div className="pb-8">
              <GiDiamonds className="text-white text-2xl mb-4" />
              <div className="text-2xl font-semibold mb-2">
                Industry Experts
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-gray-300 text-base">
                  Specialized professionals with deep industry knowledge and
                  experience.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[-50px] left-0 w-full h-[2px] bg-white transform translate-y-[-50px] group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
