export default function ConversationProgress() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] w-full">
      <div className="bg-[#0a232f] rounded-lg p-12 shadow-lg text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          Conversation in progress...
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          It looks like you have a conversation in progress. Do you want to
          continue from where you left off?
        </p>
        <div className="flex gap-6 justify-center">
          <button className="bg-white text-[#0a232f] px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
            Yes, continue
          </button>
          <button className="bg-[#0a232f] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#18394a] transition-colors border border-white">
            No, start over
          </button>
        </div>
      </div>
    </section>
  );
}
