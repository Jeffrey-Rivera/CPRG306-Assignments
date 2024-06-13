import ItemList from "./item-list";

export default function Page(){
  return (
    <main className="min-h-screen bg-black bg-opacity-90 items-center">
       <h1 className="text-stone-50 font-semibold text-4xl p-5">Shopping List</h1>
      
      <ItemList />
    </main>
  );
}