import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <GoogleTranslate/>
    </>
  )
};

export default CustomApp;

const GoogleTranslate = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    // Fetch translation logic will go here
    // For demonstration purpose, let's just set the translated text to the reversed input text
    const reversedText = text.split("").reverse().join("");
    setTranslatedText(reversedText);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold mb-6">Google Translate</h1>
        <textarea
          className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-md"
          rows="6"
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
          onClick={handleTranslate}
        >
          Translate
        </button>
        {translatedText && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Translated Text:</h2>
            <p className="border border-gray-300 rounded-md p-2">
              {translatedText}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
