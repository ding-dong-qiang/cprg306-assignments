"use client";
import NewItem from "./new-item";
import { useState } from "react";

export default function NewItemPage({onAddItem}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [count, setCount] = useState(1);

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleCountChange = (newCount) => setCount(newCount);

  const generateId = () => Math.random().toString(36).slice(2, 9);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: generateId(),
      name: name,
      quantity: count,
      category: category,
    };

    onAddItem(newItem);
    setName("");
    setCategory("produce");
    setCount(1);
  };

  const decrementCounter = () => {
    if (count > 1) {
      setCount(count-1);
    }
  };

  const incrementCounter = () => {
    if (count < 20) {
      setCount(count+1);
    }
  };
  let btnStyles =
    "bg-blue-600 text-white text-xl rounded mr-2 my-4 w-10 hover:bg-blue-400 active:bg-yellow-600 disabled:bg-gray-400";

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="p-2 m-4 max-w-sm w-full bg-slate-500 max-h-[200px]"
      >
        <div className="mt-1">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Item Name"
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg bg-white focus:border-blue-500 focus:bg-blue-300"
          />
        </div>

        <div className="bg-slate-500 mt-2 rounded-lg flex justify-between h-12">
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

          <select
            onChange={handleCategoryChange}
            value={category}
            className="px-2 py-0.5 rounded-lg bg-white focus:bg-blue-300 border border-gray-300"
          >
            <option disabled value="category">
              Category
            </option>
            <option value="produce">Produce</option>
            <option value="diary">Diary</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen food">Frozen Food</option>
            <option value="canned goods">Canned goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full text-3xl mt-4 px-3 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-400 active:bg-green-400"
        >
          +
        </button>
      </form>
    </main>
  );
};
