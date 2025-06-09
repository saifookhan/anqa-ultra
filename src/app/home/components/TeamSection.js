export default function TeamSection() {
  return (
    <section className="px-16 min-h-[100vh] w-full flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-300 text-lg">
              People from ultra. accumulate assessed experience in top-tier
              consulting and C-level track record across key industries.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="bg-[#112534] rounded-lg overflow-hidden w-72 hover:bg-[#1a2f42] transition-colors">
              <img
                src="/team1.jpg"
                alt="Clément Eymard"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xl font-semibold mb-2">Clément Eymard</div>
                <div className="text-gray-300">
                  Co-Founder | Europe
                  <br />
                  Paris Office
                </div>
              </div>
            </div>
            <div className="bg-[#112534] rounded-lg overflow-hidden w-72 hover:bg-[#1a2f42] transition-colors">
              <img
                src="/team2.jpg"
                alt="Valentin Raye"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xl font-semibold mb-2">Valentin Raye</div>
                <div className="text-gray-300">
                  Co-Founder | Middle-East
                  <br />
                  Abu Dhabi and Dubai Office
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
