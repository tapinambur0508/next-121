"use client";
import { useCounterStore } from "@/stores/counterStore";

function Counter() {
  // const { counter, increment, decrement } = useCounterStore();
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-6 w-fit">
      <button
        onClick={decrement}
        className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl font-bold rounded-lg hover:from-pink-600 hover:to-red-600 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
      >
        −
      </button>

      <span className="text-4xl font-bold text-gray-800 min-w-[80px] text-center">
        {counter}
      </span>

      <button
        onClick={increment}
        className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-2xl font-bold rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
