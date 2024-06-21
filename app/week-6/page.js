"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemData from "./items.json";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(ItemData);

  const AddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen bg-black bg-opacity-90 flex flex-col justify-left">
      <h1 className="font-bold text-4xl text-white text-left mb-5"> Shopping List </h1>
      <h2 className="font-bold text-xl text-white text-left"> Add New Item </h2>
      <div className="flex justify-left"> <NewItem onAddItem={AddItem} /> </div>
      <div className="flex justify-left"> <ItemList items={items} /> </div>
    </main>
  );
}