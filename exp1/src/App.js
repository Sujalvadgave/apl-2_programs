import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);  // Hook for state

  useEffect(() => {
    // Hook for lifecycle logic
    document.title = `You clicked ${count} times`;
  }, [count]);  // Dependency array, re-run effect when `count` changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
