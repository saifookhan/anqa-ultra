import React from "react";

import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Button from "antd/es/button";
import Space from "antd/es/space";

function ConversationSection() {
  return (
    <div
      className="flex flex-col items-center gap-8 
                    py-28 px-6 
                    sm:py-40 sm:px-20 
                    md:py-[11.5rem] md:px-[8.75rem] 
                    w-full bg-[#01121b]"
    >
      <div
        className="flex flex-col items-center gap-8 
                      max-w-[800px] w-full"
      >
        <Title
          level={1}
          className="!text-white !text-center !text-3xl 
                     sm:!text-4xl md:!text-5xl !font-bold !leading-normal font-[pt]"
        >
          Conversation in progress...
        </Title>
        <Text
          className="!text-white !text-center !text-base 
                         sm:!text-lg md:!text-xl !leading-[150%] font-['Roboto'] 
                         max-w-[556px] w-full"
        >
          It looks like you have a conversation in progress. Do you want to
          continue from where you left off?
        </Text>
        <Space size="large" className="mt-4">
          <Button
            type="default"
            className="py-3 px-5 sm:py-4 sm:px-6 rounded-full bg-white text-black text-base sm:text-xl font-['Roboto']"
          >
            Yes, continue
          </Button>
          <Button
            type="default"
            className="py-3 px-5 sm:py-4 sm:px-6 rounded-full border border-white bg-[#01121b] text-white text-base sm:text-xl font-['Roboto']"
          >
            No, start over!
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default ConversationSection;
