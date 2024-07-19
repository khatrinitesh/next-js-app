import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <Emailer/>
    </>
  )
};

export default CustomApp;

function Emailer() {
  const [recipent, setRecipent] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient,
          subject,
          body,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      setSuccess(true);
      setRecipient("");
      setSubject("");
      setBody("");
    } catch (error) {
      setError("Failed to send email");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="border border-gray-300 rounded px-4 py-2"
            placeholder="Recipient Email"
            type="email"
            value={recipent}
            onChange={(e) => setRecipent(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            placeholder="Email Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 h-32"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send Email
        </button>
        </form>
      </div>
    </>
  );
}
