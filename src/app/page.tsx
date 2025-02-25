"use client"
import Image from "next/image";
import { dominoCards } from "./source/source";
import buttons from "@/handler/dominoHandler";

export default function Home() {
  const buttonHandlers = buttons();

  return (
    <div>
      <h2 className="text-center text-lg font-bold mb-4 pt-20 pb-20">Source Domino:</h2>
      <div id="source-domino" className="pb-16 pt-16 flex flex-wrap justify-center mb-8">
        {dominoCards.map((card, index) => (
          <span key={index}  className="bg-gray-100 border border-gray-300 rounded px-4 py-2 mx-2 mb-2 text-lg text-gray-600">
            {`[${card[0]}, ${card[1]}]`}
          </span>
        ))}
      </div>
      <div className="text-center pt-20 pb-20">
      <button
        onClick={buttonHandlers.handleSameNumber}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Same Number
      </button>
      <button
        onClick={buttonHandlers.handleSortAscending}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Sort Ascending
      </button>
      <button
        onClick={buttonHandlers.handleSortDescending}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Sort Descending
      </button>
      <button
        onClick={buttonHandlers.handleRemoveDuplicates}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Remove Duplicates
      </button>
      <button
        onClick={buttonHandlers.handleFlipCards}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Flip Cards
      </button>
      <input
        id="total-number-input"
        type="number"
        placeholder="Enter total number"
        className="py-2 px-4 border border-gray-300 rounded ml-2"
      />
      <button
        onClick={buttonHandlers.handleRemoveTotal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Remove Total
      </button>

      <div id="same-number-result"></div>
      <div id="sort-ascending-result"></div>
      <div id="sort-descending-result"></div>
      <div id="remove-duplicates-result"></div>
      <div id="flip-cards-result"></div>
      <div id="remove-total-result"></div>
      </div>
      </div>
  )
}