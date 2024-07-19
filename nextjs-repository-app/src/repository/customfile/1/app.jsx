import React, { useState } from "react";

const CustomApp = () => {
  const { selectedFile, handleFileChange, clearFile } = FileInput();

  return (
    <>
      <div className="relative">
        <input
          type="file"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="bg-gray-200 py-2 px-4 rounded-lg text-center">
          {selectedFile ? (
            <>
              <div>
                <span>{selectedFile.name}</span>
                <button className="ml-2 text-red-600" onClick={clearFile}>
                  Clear
                </button>
              </div>
            </>
          ) : (
            <>  
              <span>Choose a file...</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomApp;

const FileInput = (initialValue = null) => {
  const [selectedFile, setSelectedFile] = useState(initialValue);

  const handleFileChange = (e) => {
    const file = e.target.file[0];
    setSelectedFile(file);
  };

  const clearFile = () => {
    setSelectedFile(null);
  };

  return { selectedFile, handleFileChange, clearFile };
};
