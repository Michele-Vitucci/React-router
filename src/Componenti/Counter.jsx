import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contatore: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
      <button onClick={() => setCount(count - 1)}>Decrementa</button>
    </div>
  );
}

export default Counter;
