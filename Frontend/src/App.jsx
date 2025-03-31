import { useState , useEffect} from 'react'
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx"
import prism from "prismjs"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    prism.highlightAll()
  })
  return (
    <div className="main">
      <div className="left">
        <div className="code">
          <pre>
          <code className="language-javascript">
            {`function sum(){
  return a+b;
}`}
          </code>   
          </pre>
        </div>
        <div className="review-button">Review</div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default App
