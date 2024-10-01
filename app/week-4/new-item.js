'use client'

import { useState } from "react";

export default function NewItem(){
    const [count, setCount] = useState(1);

    const incrementCounter = () => {
        if (count < 20){
            setCount(count + 1);
        }
    }
    const decrementCounter = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

    let btnStyles =
      "bg-blue-600 text-white text-xl rounded py-2 px-4 mr-3 hover:bg-blue-400 active:bg-yellow-600 disabled:bg-gray-400";

    return (
      <div className="flex items-center">
        <p className="text-3xl mr-20">{count}</p>
        <button className={btnStyles} onClick={incrementCounter} disabled = {count >= 20}>
          +
        </button>
        <button className={btnStyles} onClick={decrementCounter} disabled = {count <= 1}>
          -
        </button>
      </div>
    );
}