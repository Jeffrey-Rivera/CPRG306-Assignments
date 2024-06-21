"use client";

import Item from './item.js';
import { useState } from 'react';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const selectedStyle = "";
  let nameStyle = "";
  let categoryStyle = "";

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
    nameStyle = selectedStyle;

  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
    categoryStyle = selectedStyle;
  }

  return (
    <main>
      <div className="p-2 m-2 text-l capitalize text-stone-50">
        Sort By:
        <button className={"p-2 m-2 w-36 square-lg " + (sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700')} onClick={() => setSortBy('name')}>Name</button>
        <button className={"p-2 m-2 w-36 square-lg " + (sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700')} onClick={() => setSortBy('category')}>Category</button>
      </div>
      
        <div className=''>
          {sortBy != 'Group By Category' ? 
            items.map((item) => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            )) :
            categories.map((category, index) => (
              <ul key={index}>
                <li className="text-xl capitalize text-stone-50" >{category}</li>
                <li>
                  {(items.filter((item) => item.category === category)).map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                  ))}
                </li>
              </ul>
            ))}
        </div>
    </main>
  );
}