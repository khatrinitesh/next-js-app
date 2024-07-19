import React, { useState } from 'react';
import './style.css';

const PatternLock = () => {

    const [selectedNodes, setSelectedNodes] = useState([]);
    const [patternSet, setPatternSet] = useState(false);
    const [pattern, setPattern] = useState([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]);
    
      const handleNodeClick = (row, col) => {
        if (!patternSet) return; // Do not handle clicks until pattern is set
    
        setSelectedNodes([...selectedNodes, [row, col]]);
      };
    
      const handleMouseUp = () => {
        if (!patternSet) return;
    
        validatePattern();
        setSelectedNodes([]);
      };
    
      const validatePattern = () => {
        if (selectedNodes.length !== pattern.length) {
          alert('Pattern is incorrect');
          return;
        }
    
        for (let i = 0; i < pattern.length; i++) {
          for (let j = 0; j < pattern[i].length; j++) {
            if (pattern[i][j] !== selectedNodes[i][j]) {
              alert('Pattern is incorrect');
              return;
            }
          }
        }
    
        alert('Pattern is correct');
      };
    
      const renderPatternNodes = () => {
        return pattern.map((row, rowIndex) => (
          <div key={rowIndex} className="pattern-row">
            {row.map((col, colIndex) => (
              <div
                key={colIndex}
                className={`pattern-node ${selectedNodes.some(node => node[0] === rowIndex && node[1] === colIndex) ? 'selected' : ''}`}
                onClick={() => handleNodeClick(rowIndex, colIndex)}
                onMouseEnter={() => handleNodeClick(rowIndex, colIndex)}
              >
                {col}
              </div>
            ))}
          </div>
        ));
      };
    
      const setPatternMode = () => {
        setPatternSet(true);
      };
  return (
    <>
        <div className="pattern-lock" onMouseUp={handleMouseUp}>
      <h2>Pattern Lock</h2>
      <div className="pattern-container">{renderPatternNodes()}</div>
      {!patternSet && <button onClick={setPatternMode}>Set Pattern</button>}
    </div>
    </>
  )
}

export default PatternLock