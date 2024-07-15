"use client";

import Item from './item.js';
import { useState } from 'react';

export default function ItemList({items, onItemSelect}) {
    
  const [sortBy, setSortBy] = useState('name');
 
  if (sortBy === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 'category') {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  let categories = items.map((item) => item.category);
  categories.sort();
  let uniqueCategories = [...new Set(categories)];
  categories = uniqueCategories;

  return (
    <main>
      <div className="p-2 m-2 text-l capitalize text-stone-50">
        Sort By:
        <button className={"p-2 m-2 w-36 square-lg " + (sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700')} onClick={() => setSortBy('name')}>Name</button>
        <button className={"p-2 m-2 w-36 square-lg " + (sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700')} onClick={() => setSortBy('category')}>Category</button>
      </div>
      
        <div className='p-2 m-2 text-black'>
          {sortBy !== 'Group By Category' ? 
            items.map((item) => (
              <ul key={item.id} >
                <li>
                <Item id={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
                </li>
              </ul>
            )) :
            categories.map((category, index) => (
              <ul key={index}>
                <li className="text-xl capitalize" >{category}</li>
                <li>
                  {(items.filter((item) => item.category === category)).sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                    <ul key={item.id} >
                      <li>
                        <Item id={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
                      </li>
                    </ul>                    
                  ))}
                </li>
              </ul>
            ))}
        </div>
    </main>
  );
}