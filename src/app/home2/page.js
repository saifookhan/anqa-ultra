import React from "react";
import ConversationSection from "./ConversationSection";
import TalentSection from "./TalentSection";

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <ConversationSection />
      <TalentSection />
    </div>
  );
};

export default Page;
