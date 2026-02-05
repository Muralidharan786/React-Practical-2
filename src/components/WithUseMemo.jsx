import { useState, useMemo } from "react";

function expensiveCalculation(num) {
  console.log("Running expensive calculation...");
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num;
  }
  return result;
}

function WithUseMemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <h3>Result: {expensiveValue}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </>
  );
}

export default WithUseMemo;
