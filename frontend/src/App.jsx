import React, { useState } from "react";   // ✅ IMPORTANT
import VideoSummary from "./components/VideoSummary";
import "./index.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      setAnswer("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Interactive Study Tool</h1>

      <div className="card">
        <h2>Teacher–Student Dialogue</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button onClick={askQuestion} disabled={loading}>
            {loading ? "Thinking..." : "Ask"}
          </button>
        </div>

        {answer && (
          <div className="answer-box">
            <strong>Teacher:</strong> {answer}
          </div>
        )}
      </div>

      <div className="card">
        <h2>Video Summaries</h2>
        <VideoSummary />
      </div>
    </div>
  );
}

export default App;
