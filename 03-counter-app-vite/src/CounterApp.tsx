import { useState } from "react";
export const CounterApp = ({ value }: { value: number }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};
