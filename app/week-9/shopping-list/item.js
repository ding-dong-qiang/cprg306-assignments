export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul>
      <li
        className="p-2 m-4 bg-cyan-600 max-w-sm cursor-pointer"
        onClick={onSelect}
      >
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="m-2 border-2 border-dotted border-black">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
