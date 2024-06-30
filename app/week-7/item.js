"use client";
import { useState } from "react";

export default function Item({id, name, quantity, category, onSelect}) {
  
  const [visibility, setVisibility] = useState("invisible");
  const [itemBg, setItemBg] = useState("bg-mute");

  const handleMouseEnter = () => {
    setVisibility("visible");
    setItemBg("bg-black text-white");
  }

  const handleMouseLeave = () => {
    setVisibility("invisible");
    setItemBg("bg-mute");
  }

  return (
    <main>
      <div className="max-w-96 " onClick={() => onSelect(id)}> 
        <ul className={" p-2 m-4 w-96 text-stone-50 border-2 hover:bg-orange-500 cursor-pointer " +itemBg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <li className="text-xl font-bold">{name}</li>
          <li className="text-sm">Buy {quantity} in {category}</li>
        </ul>
      </div>
    </main>
  );
}