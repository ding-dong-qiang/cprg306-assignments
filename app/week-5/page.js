"use client";
import NewItem from "./new-item";
import { useState } from "react";

export default function NewItemPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [count, setCount] = useState(1);
  //setName("");
  //setCategory("");

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleCountChange = (newCount) => setCount(newCount);
  const handleSubmit = (event) => {
    event.preventDefault();
    let NewItemObj = {
      item_name: name,
      item_qty: count,
      item_category: category,
    };

    alert(`
      Added item: ${NewItemObj.item_name}, quantity: ${NewItemObj.item_qty}, category: ${NewItemObj.item_category}`);

    setName("");
    setCategory("produce");
    

  };

  
  return (
    <main className="bg-black flex justify-center w-full min-h-screen">
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
          <NewItem onCountChange={handleCountChange} />

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
}