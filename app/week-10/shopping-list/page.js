"use client";
import { useState , useEffect} from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";



export default function Page() {
  const { user } = useUserAuth();
  const [selectedItemName, setSelectedItemName] = useState("");

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);
  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }
  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0] // Take the name up to the first comma
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
        ""
      ) // Remove emojis
      .trim(); // Remove whitespace

    setSelectedItemName(cleanedName);
  };
  const handleAddItem = async (newItem) => {
    try {
      const id = await addItem(user.uid, newItem); // Add new item to database
      setItems([...items, { ...newItem, id }]); // Add new item to items state
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="bg-slate-600">
      <h1 className="text-3xl font-bold m-3">Shopping List</h1>
      {user ? (
        <div className="flex">
          <div className="mr-10">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      ) : (
        <div>
          <p>you must be logged in to view this page.</p>
          <Link href="/week-10/">click here to return to the sign in page.</Link>
        </div>
      )}
    </main>
  );
}
