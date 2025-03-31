import { useState , useEffect} from 'react'
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(` function sum(){
  return a+b;
    `)

  useEffect(() => {
    prism.highlightAll()
  })
  return (
    <div className="main">
      <div className="left">
        <div className="code">
        <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
        </div>
        <div className="review-button">Review</div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default App
