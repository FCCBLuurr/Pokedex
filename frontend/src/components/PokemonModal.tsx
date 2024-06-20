"use client"; // Ensure this is a Client Component

import { Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface PokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: any; // You can define a more specific type based on your data structure
}

const PokemonModal = ({ isOpen, onClose, pokemon }: PokemonModalProps) => {
  console.log("PokemonModal Rendered with isOpen:", isOpen, "and pokemon:", pokemon);

  if (!pokemon) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <TransitionChild
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <TransitionChild
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    {pokemon.name}
                  </DialogTitle>
                  <div className="mt-2">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto" />
                    <p className="text-sm text-gray-500">
                      Height: {pokemon.height} decimetres
                    </p>
                    <p className="text-sm text-gray-500">
                      Weight: {pokemon.weight} hectograms
                    </p>
                    <p className="text-sm text-gray-500">
                      Base Experience: {pokemon.base_experience}
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PokemonModal;
