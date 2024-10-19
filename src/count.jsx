import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  let value = count + 1;
  let reduce = count - 1;
  return (
    <>
      <p>Count : {count}</p>
      <div
        style={{
          border: "2px solid green",
          borderRadius: "16px",
          padding: "10px",
          display: "inline-block",
        }}
      >
        <button style={{marginRight:'8px'}} onClick={() => setCount(value)}>Add</button>
        <button onClick={() => setCount(reduce)}>Reduce</button>
      </div>
    </>
  );
}
