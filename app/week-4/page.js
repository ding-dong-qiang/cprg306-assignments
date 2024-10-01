import NewItem from "./new-item";

export default function NewItemPage() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <main className="bg-white p-5 rounded-lg shadow-lg">
        <NewItem />
      </main>
    </div>
  );
}