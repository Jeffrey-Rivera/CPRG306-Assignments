export default function Item(prop) {
    
    return (
      <main>
        <ul className=" bg-slate-800 p-2 m-4 w-96 text-stone-50 ">
            <li className="text-xl font-bold">{prop.name}</li>
            <li className="text-sm">Buy {prop.quantity} in {prop.category}</li>
        </ul>
      </main>
    );
  }