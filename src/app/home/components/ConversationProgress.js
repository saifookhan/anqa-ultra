export default function ConversationProgress() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <div className="bg-[#0a232f] rounded-lg p-8 shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Conversation in progress...</h2>
        <p className="text-gray-300 mb-6">It looks like you have a conversation in progress. Do you want to continue from where you left off?</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-[#0a232f] px-6 py-2 rounded font-medium">Yes, continue</button>
          <button className="bg-[#18394a] text-white px-6 py-2 rounded font-medium">No, start over</button>
        </div>
      </div>
    </section>
  );
} 