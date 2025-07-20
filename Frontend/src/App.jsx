import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "./App.css";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("Paste your code here...");

  async function codeReview() {
    if (!code.trim()) {
      setPlaceholder("Please enter some code to review");
      return;
    }
    setLoading(true);
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });
    setReview(response.data);
    setLoading(false);
  }

  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div className="app-container">
      <h1 className="heading-title">CodexScan</h1>
      <div className="main">
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              placeholder={placeholder}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                backgroundColor: "#1e1e1e",
                color: "#ffffff",
              }}
            />
          </div>
          <div onClick={codeReview} className="review-button">
            Review
          </div>
        </div>
        <div className="right">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          ) : (
            <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
