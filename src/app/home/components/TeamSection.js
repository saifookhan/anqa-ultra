import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section id="team" className="px-4 pt-40 min-h-[100vh] w-full flex flex-col justify-center md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-300 text-lg">
              People from ultra. accumulate assessed experience in top-tier
              consulting and C-level track record across key industries.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[15px] mt-[100px]">
            <div class="flex flex-col items-start p-0 gap-6 w-[260px] h-[550px] group">
              {/* <!-- Image --> */}
              <div class="w-[260px] h-[320px] bg-[url('/images/image1.jpg')] bg-cover bg-center flex-none order-0"></div>
              {/* <!-- Team Clement --> */}
              <div class="flex flex-row items-start p-0 gap-4 w-[260px] h-[186px] flex-none order-1 self-stretch">
                {/* <!-- Rectangle 234 --> */}
                <div class="w-[2px] h-0 group-hover:h-[186px] bg-white transition-all duration-500 ease-in-out flex-none order-0"></div>
                {/* <!-- Frame 82 --> */}
                <div class="flex flex-col items-start p-0 gap-4 w-[242px] h-[186px] flex-none order-1 self-stretch flex-grow">
                  {/* <!-- Content --> */}
                  <div class="flex flex-col items-start p-0 gap-4 w-[242px] h-[98px] flex-none order-0 self-stretch">
                    {/* <!-- Frame 80 --> */}
                    <div class="flex flex-col items-start p-0 gap-1 w-[242px] h-[98px] flex-none order-0 self-stretch">
                      {/* <!-- Heading --> */}
                      <div class="w-[242px] h-[34px] text-white font-roboto font-medium text-[24px] leading-[140%]">
                        Clément Eymard
                      </div>
                      {/* <!-- Text --> */}
                      <div class="w-[242px] h-[60px] text-[#C5C8CB] font-roboto text-[20px] leading-[150%]">
                        Co-Founder | Europe Paris Office
                      </div>
                    </div>
                  </div>
                  {/* <!-- Social Links --> */}
                  <div class="flex flex-col items-start p-0 gap-3 w-[124.1px] h-[72px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-none order-1 mt-4">
                    <a
                      href="#"
                      class="flex flex-row items-center p-0 gap-2 w-[105.1px] h-[30px] text-[#C5C8CB] hover:text-white transition-colors"
                    >
                      <FaLinkedin className="w-[22.1px] h-[22.1px]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      class="flex flex-row items-center p-0 gap-2 w-[124.1px] h-[30px] text-[#C5C8CB] hover:text-white transition-colors"
                    >
                      <FaWhatsapp className="w-[22.1px] h-[22.1px]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start p-0 gap-6 w-[260px] h-[550px] group">
              {/* <!-- Image --> */}
              <div class="w-[260px] h-[320px] bg-[url('/images/image2.jpg')] bg-cover bg-center flex-none order-0"></div>
              {/* <!-- Team Clement --> */}
              <div class="flex flex-row items-start p-0 gap-4 w-[260px] h-[186px] flex-none order-1 self-stretch">
                {/* <!-- Rectangle 234 --> */}
                <div class="w-[2px] h-0 group-hover:h-[186px] bg-white transition-all duration-500 ease-in-out flex-none order-0"></div>
                {/* <!-- Frame 82 --> */}
                <div class="flex flex-col items-start p-0 gap-4 w-[242px] h-[186px] flex-none order-1 self-stretch flex-grow">
                  {/* <!-- Content --> */}
                  <div class="flex flex-col items-start p-0 gap-4 w-[242px] h-[98px] flex-none order-0 self-stretch">
                    {/* <!-- Frame 80 --> */}
                    <div class="flex flex-col items-start p-0 gap-1 w-[242px] h-[98px] flex-none order-0 self-stretch">
                      {/* <!-- Heading --> */}
                      <div class="w-[242px] h-[34px] text-white font-roboto font-medium text-[24px] leading-[140%]">
                        Valentin Reyx
                      </div>
                      {/* <!-- Text --> */}
                      <div class="w-[242px] h-[60px] text-[#C5C8CB] font-roboto text-[20px] leading-[150%]">
                        Co-Founder | Middle-East Abu Dhabi and Dubai Offices
                      </div>
                    </div>
                  </div>
                  {/* <!-- Social Links --> */}
                  <div class="flex flex-col items-start p-0 gap-3 w-[124.1px] h-[72px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-none order-1 mt-4">
                    <a
                      href="#"
                      class="flex flex-row items-center p-0 gap-2 w-[105.1px] h-[30px] text-[#C5C8CB] hover:text-white transition-colors"
                    >
                      <FaLinkedin className="w-[22.1px] h-[22.1px]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      class="flex flex-row items-center p-0 gap-2 w-[124.1px] h-[30px] text-[#C5C8CB] hover:text-white transition-colors"
                    >
                      <FaWhatsapp className="w-[22.1px] h-[22.1px]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
