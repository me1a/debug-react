import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './app.less'

const App = function () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
