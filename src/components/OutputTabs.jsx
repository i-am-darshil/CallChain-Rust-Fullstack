import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const OutputTabs = ({ taskOutputs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex bg-[#1E1E2E] border-b border-gray-700 overflow-x-auto">
        {/* Add overflow-x-auto to allow horizontal scrolling */}
        <div className="flex flex-nowrap">
          {/* flex-nowrap prevents wrapping of tabs */}
          {taskOutputs.map((task, index) => (
            <Tab
              key={index}
              index={index}
              label={task.task}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex-grow overflow-auto bg-[#1E1E2E]">
        {taskOutputs.map((task, index) => {
          console.log("task", task);
          return (
            <TabContent
              key={index}
              isActive={index === activeTab}
              content={task.output}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OutputTabs;
