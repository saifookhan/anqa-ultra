export default function TalentsSection() {
  return (
    <section className="px-8 py-16">
      <h3 className="text-xl font-semibold mb-2">Our talents</h3>
      <p className="text-gray-300 mb-8 max-w-2xl">
        People from ultra. are executive assessed top-performers in top-tier
        consulting and C-level track record across key industries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-lg font-semibold mb-2">Consultants</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Interim Executives</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Industry Experts</div>
        </div>
      </div>
    </section>
  );
}
