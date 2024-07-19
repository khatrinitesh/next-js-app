import React from "react";

const CustomApp = () => {
  const handleDownload = () => {
    // Implement download logic here
    alert("Downloading...");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <DownloadButton onClick={handleDownload} label="Download File" />
      </div>
    </>
  );
};

export default CustomApp;

const DownloadButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <svg
        className="w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M13 3a1 1 0 0 1 .707.293l3 3a1 1 0 0 1 .293.707V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H6v10h8V7.414l-2-2V14a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1h4zM5 17a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm9-8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </button>
  );
};
