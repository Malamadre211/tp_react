import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    return (
       <div className='counter-container'>
        <h3>Count: {counter}</h3>
          <button onClick={() => setCounter(counter + 1)}>+</button>
       </div>
    );
  }

  export default Counter;