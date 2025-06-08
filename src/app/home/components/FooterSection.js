export default function FooterSection() {
  return (
    <footer className="w-full px-8 py-8 mt-16 border-t border-gray-700 text-gray-300 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="mb-4 md:mb-0 font-bold text-white text-lg">ultra.</div>
        <div className="flex-1 flex flex-col items-center">
          <div className="mb-2">© 2024 ultra. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Social Network
            </a>
            <a href="#" className="hover:underline">
              Collaboration
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          {/* Placeholder for small icon */}
          <span className="inline-block w-5 h-5 bg-gray-500 rounded" />
        </div>
      </div>
    </footer>
  );
}
