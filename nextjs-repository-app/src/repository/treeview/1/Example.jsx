import React, { useState } from "react";
// import "./style.css";

const Example = ({data }) => {
  return (
    <>
      <div className="m-4">
      {data.map(rootNode => (
        <TreeNode key={rootNode.id} node={rootNode} />
      ))}
    </div>
    </>
  );
};

export default Example;

const TreeNode = ({ node }) => {
    const hasChildren = node.children && node.children.length > 0;
    const toggleNode = () => {
      // You can implement logic to toggle node expansion here
    };
  
    return (
      <div>
        <div className="flex items-center">
          {hasChildren && (
            <button onClick={toggleNode} className="mr-2">
              {node.expanded ? '-' : '+'}
            </button>
          )}
          <span>{node.label}</span>
        </div>
        {node.expanded && hasChildren && (
          <div className="ml-4">
            {node.children.map(child => (
              <TreeNode key={child.id} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };
