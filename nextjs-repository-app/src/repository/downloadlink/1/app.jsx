import React from 'react'

const CustomApp = () => {
    const files = [
        { name: 'File 1', url: 'https://www.espressoenglish.net/wp-content/uploads/free/500-Real-English-Phrases.pdf' },
        { name: 'File 2', url: 'https://learningenglandblog.files.wordpress.com/2018/04/650_english_phrases_for_everyday_speaking.pdf' },
        { name: 'File 3', url: 'https://bilingua.si/wp-content/uploads/2016/11/100-Business-English-Expressions.pdf' },
      ];
  return (
    <div>
      <DownloadLinks files={files}/>
    </div>
  )
}

export default CustomApp

const DownloadLinks = ({ files }) => {
    return (
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold mb-2">Download Files</h2>
        {files.map((file, index) => (
          <a target='_blank'
            key={index}
            href={file.url}
            className="flex items-center justify-between bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            download
          >
            <span className="text-gray-800">{file.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600 hover:text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11 4v5a1 1 0 0 0 2 0V4h3a1 1 0 0 0 0-2h-5a1 1 0 0 0-1 1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M9.293 6.707a1 1 0 0 0-1.414 1.414L9.586 10l-1.707 1.879a1 1 0 1 0 1.414 1.414l2-2.207a1 1 0 0 0 0-1.414l-2-2.207a1 1 0 0 0-.707-.293z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M5 14a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2H5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        ))}
      </div>
    );
  };