import React from "react";
import DependencyGraph from "./DependencyGraph";

const TabContent = ({ isActive, content }) => {
  if (!isActive) return null;

  return (
    <div className="p-4">
      {content.graph ? (
        <DependencyGraph graphDataString={content.graph} />
      ) : (
        <pre className="text-sm">{JSON.stringify(content, null, 2)}</pre>
      )}
    </div>
  );
};

export default TabContent;
