import React, { useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputPanel from "./components/OutputPanel";
// import DependencyGraphPanel from "./components/DependencyGraphPanel";
import OutputTabs from "./components/OutputTabs";
import Header from "./components/Header";

const App = () => {
  const [editorContent, setEditorContent] = useState("");
  const [taskOutputs, setTaskOutputs] = useState([]);

  const handleRun = () => {
    // Handle the run button click event
    console.log("Run button clicked!");
  };

  useEffect(() => {
    // Mocking task outputs for demonstration purposes
    const mockOutputs = [
      {
        task: "Dependency Graph",
        output: {
          graph:
            '{"task6": [], "task1": ["task2", "task3"], "task2": ["task6"], "task3": ["task4", "task6"], "task4": ["task6"], "task5": []}',
        },
      },
      { task: "Task 1", output: { message: "Task 1 output" } },
      { task: "Task 2", output: { message: "Task 2 output" } },
      { task: "Task 3", output: { message: "Task 3 output" } },
      { task: "Task 4", output: { message: "Task 4 output" } },
      { task: "Task 5", output: { message: "Task 5 output" } },
      { task: "Task 6", output: { message: "Task 6 output" } },
    ];
    console.log("mockOutputs", mockOutputs);
    setTaskOutputs(mockOutputs);
  }, []);

  return (
    // <div className="flex h-screen bg-gray-900 text-gray-200">
    //   <div className="flex-1 border-r border-gray-700">
    //     <CodeEditor onChange={setEditorContent} />
    //   </div>
    //   <div className="w-1/2 flex flex-col bg-[#1E1E2E]">
    //     <OutputTabs taskOutputs={taskOutputs} />
    //   </div>
    // </div>

    <div className="flex flex-col h-screen bg-[#0D1117] text-gray-200">
      <Header onRun={handleRun} />
      <div className="flex flex-grow">
        <div className="w-1/2 p-2 border-r border-gray-700">
          <CodeEditor onChange={setEditorContent} />
        </div>
        <div className="w-1/2 flex flex-col bg-[#1E1E2E]">
          <OutputTabs taskOutputs={taskOutputs} />
        </div>
      </div>
    </div>
  );
};

export default App;
