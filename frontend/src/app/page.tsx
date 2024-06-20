"use client";

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Home = () => {
  const [input, setInput] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log("Input Changed:", e.target.value);
  };

  const handleButtonClick = async () => {
    console.log("Button Clicked. Fetching Pokémon data for:", input);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched Pokémon Data:", data);
        setSelectedPokemon(data);
      } else {
        console.error("Error: Pokémon not found");
        alert('Pokémon not found');
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Pokedex Search</h1>
        <div className="mb-4">
          <label htmlFor="pokemonName" className="block text-gray-700">Pokémon Name</label>
          <input
            type="text"
            id="pokemonName"
            value={input}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>

      {selectedPokemon && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-8">
          <h2 className="text-2xl font-bold mb-4">{selectedPokemon.name}</h2>
          <div className="flex justify-center mb-4">
            <img src={selectedPokemon.sprites.other['official-artwork'].front_default} alt={selectedPokemon.name} />
          </div>
          <p className="text-sm text-gray-500">
            <strong>Height:</strong> {selectedPokemon.height} decimetres
          </p>
          <p className="text-sm text-gray-500">
            <strong>Weight:</strong> {selectedPokemon.weight} hectograms
          </p>
          <p className="text-sm text-gray-500">
            <strong>Base Experience:</strong> {selectedPokemon.base_experience}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
