export default function TeamSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start px-16 py-16">
      <div className="max-w-xs mb-8 md:mb-0">
        <h3 className="text-xl font-semibold mb-2">Our Team</h3>
        <p className="text-gray-300">
          People from ultra. accumulate assessed experience in top-tier
          consulting and C-level track record across key industries.
        </p>
      </div>
      <div className="flex gap-8">
        <div className="bg-[#112534] rounded-lg overflow-hidden w-56">
          <img
            src="/team1.jpg"
            alt="Clément Eymard"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="font-semibold">Clément Eymard</div>
            <div className="text-sm text-gray-300">
              Co-Founder | Europe
              <br />
              Paris Office
            </div>
          </div>
        </div>
        <div className="bg-[#112534] rounded-lg overflow-hidden w-56">
          <img
            src="/team2.jpg"
            alt="Valentin Raye"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="font-semibold">Valentin Raye</div>
            <div className="text-sm text-gray-300">
              Co-Founder | Middle-East
              <br />
              Abu Dhabi and Dubai Office
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
