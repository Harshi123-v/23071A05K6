// components/Fibonacci.js

import React, { useState } from 'react';

export default function Fibanocci() {
  const [count, setCount] = useState(5);
  const [sequence, setSequence] = useState([]);

  const generateFibonacci = (n) => {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
  };

  return (
    <div>
      <h3>Fibonacci Generator</h3>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        min="1"
      />
      <button onClick={() => setSequence(generateFibonacci(count))}>
        Generate
      </button>
      <p>{sequence.join(', ')}</p>
    </div>
  );
}
