"use client"

import { useState, useEffect } from "react";
import { getItems } from "../_services/shopping-list-service.js";
import { addItem } from "../_services/shopping-list-service.js";
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const loadItems = async () => {
      const items = await getItems(user.uid);
      setItems(items);
    };

    useEffect(() => {
      if (user) {
        loadItems();
      }

    }, [user]);
    const handleAddItem =  async (item) => {
      const itemId =  await addItem(user.uid, item);
      item.id = itemId;
      setItems([...items, item]);
    }

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
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

  if (!user)
  {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className=" bg-eggshell text-black p-8 rounded-lg w-1/6  flex-rows text-center">
          <Link className="font-semibold text-xl cursor-pointer hover:underline" href="../week-10">Click here to Login</Link>
        </div>
    </main>      
    );
  }
 
  return (
    <main className=' bg-eggshell'>
      <div className="flex justify-between">
      <h1 className='text-3xl font-bold m-2 mt-0 text-black'>Shopping List</h1>
      <button className=" text-white bg-black rounded-lg p-2 m-4 cursor:pointer" onClick={firebaseSignOut}>Sign Out</button>
      </div>
        <div className="text-black flex">
          <div className="flex-1 max-w-md">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onDelete={deleteItem} onItemSelect={handleItemSelect}/>
          </div>
          <div className="flex-1 max-w-md">
            <MealIdeas ingredient={selectedItem} />
          </div>
        </div>
    </main>
    
  );
}