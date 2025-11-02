import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-6 text-center bg-blue-50 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">🔢 Counter</h2>

      <p
        className={`text-3xl font-bold mb-6 ${
          count > 0
            ? "text-green-600"
            : count < 0
            ? "text-red-500"
            : "text-gray-800"
        }`}
      >
        {count}
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          − Decrement
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
        >
          Reset
        </button>

        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          + Increment
        </button>
      </div>
    </div>
  );
}
