import { useState } from 'react'
function MyState() {
  const [count, setCount] = useState(10);
  function decrement(){
    setCount(count+10);
  }
  function increment(){
    setCount(count-5);
  }
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onclick={increment}>incrementation</button>
        <button onclick={increment}>decrementation</button>
    </div>
  )
}

export default MyState
