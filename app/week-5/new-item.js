'use client'

import { useState } from "react";

export default function NewItem({onCountChange}) {
  const [count, setCount] = useState(1);

  const incrementCounter = () => {
    if (count < 20) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };
  const decrementCounter = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  let btnStyles =
    "bg-blue-600 text-white text-xl rounded mr-2 my-4 w-10 hover:bg-blue-400 active:bg-yellow-600 disabled:bg-gray-400";

  return (
    <div className="flex items-center w-[50%] mr-1 border-gray-300 focus:border-blue-500 bg-white rounded-lg">
      <p className="text-xl ml-2 mr-7 w-12">{count}</p>
      <button
        type="button"
        className={btnStyles}
        onClick={incrementCounter}
        disabled={count >= 20}
      >
        +
      </button>
      <button
        type="button"
        className={btnStyles}
        onClick={decrementCounter}
        disabled={count <= 1}
      >
        -
      </button>
    </div>
  );
}