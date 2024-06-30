"use client"

import { useState } from "react";
import itemData from './items.json';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from "./meal-ideas";

export default function Page() {

    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState(null);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const handleItemSelect = (id) => {
        let itemBuffer = items.find((item) => item.id === id).name;
        if (itemBuffer.includes(",")) 
        {
            itemBuffer = itemBuffer.split(",")[0];
        }
        itemBuffer = itemBuffer.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g , '');
        itemBuffer = itemBuffer.trim();
        setSelectedItem(itemBuffer);
      }

      return (
        <main className="min-h-screen bg-black bg-opacity-90 flex flex-col justify-left">
          <h1 className="font-bold text-4xl text-white text-left mb-5"> Shopping List </h1>
            <div className="text-white flex">
            <div className="flex-1 max-w-md">
            <NewItem onAddItem={addItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="flex-1 max-w-md">
            <MealIdeas ingredient={selectedItem} />
            </div>
            </div>

        </main>
      );
    }