// src/components/DependencyGraph.jsx
import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import hash from "object-hash"; // Import object-hash library
import "reactflow/dist/style.css";

// Define node types outside of the component to prevent recreation on each render
const nodeTypes = {
  empty: () => null,
};

// Define edge types outside of the component to prevent recreation on each render
const edgeTypes = {
  step: {
    animated: true,
  },
};

const DependencyGraph = ({ graphDataString }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const graphData = JSON.parse(graphDataString);
    console.log(graphData);

    // Calculate the number of nodes and determine the grid size
    const numNodes = Object.keys(graphData).length;
    const gridSize = Math.ceil(Math.sqrt(numNodes));

    // Determine the spacing between nodes
    const spacingX = 200;
    const spacingY = 150;

    // Initialize arrays to store node positions
    const nodePositions = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        nodePositions.push({ x: col * spacingX, y: row * spacingY });
      }
    }

    const newNodes = Object.keys(graphData).map((task, index) => ({
      id: task,
      data: { label: task },
      position: nodePositions[index % numNodes], // Use precalculated positions
    }));

    const newEdges = Object.entries(graphData).flatMap(([task, dependencies]) =>
      dependencies.map((dep) => {
        const color = getColorForEdge(task, dep);
        return {
          id: `${task}-${dep}`,
          source: task,
          target: dep,
          animated: true,
          // label: "to the",
          type: "bezier",
          // arrowHeadType: "arrowclosed",
          markerEnd: {
            type: "arrow",
            color: color, // Choose a color that goes well with your color scheme
            strokeWidth: 2, // Adjust the stroke width
            scale: 1.5, // Adjust the size of the arrowhead
          },
          style: {
            stroke: color,
            strokeWidth: 3,
            // opacity: 1 - idx * 0.1, // Decrease opacity for overlapping edges
          },
        };
      })
    );

    setNodes(newNodes);
    setEdges(newEdges);

    console.log("nodes", nodes);
    console.log("edges", edges);
  }, [graphDataString]);

  const getColorForEdge = (source, target) => {
    // Generate a unique hash for the edge based on source and target IDs
    const edgeHash = hash({ source, target });
    // Convert hash to a hexadecimal color
    return `#${edgeHash.slice(0, 6)}`;
  };

  const onElementDrag = (event, element) => {
    // Update the position of the dragged element
    const updatedNodes = nodes.map((node) =>
      node.id === element.id ? { ...node, position: element.position } : node
    );
    setNodes(updatedNodes);
  };

  return (
    <div>
      <div className="flex justify-center items-center  text-white py-1">
        <p className="text-md font-light">
          Outgoing edges start from node's bottom , while incoming edges point
          towards node's top.
        </p>
      </div>
      <div style={{ height: 800 }}>
        {/* Ensure this div has explicit dimensions */}
        <ReactFlow
          // elements={nodes.concat(edges)}
          snapToGrid={true}
          snapGrid={[15, 15]}
          defaultZoom={1.2}
          // onElementDrag={onElementDrag}
          // nodeTypes={nodeTypes} // Use memoized nodeTypes
          // edgeTypes={edgeTypes} // Use memoized edgeTypes
          nodes={nodes}
          edges={edges}
          fitView
        >
          <MiniMap />
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default DependencyGraph;
