import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import closeSvg from "../public/cross.svg";

function CharactersInfoModal({ isOpen, closeModal, character }: any) {
  if (!isOpen) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform  rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-[#953ffa]">
                <div className="mb-4 w-full text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <Image src={closeSvg} alt="close" />
                  </button>
                </div>
                <div className="flex w-full justify-between items-center">
                  <Image
                    src={character.image}
                    alt={"characterImages"}
                    width={100}
                    height={100}
                    className="rounded-full mb-4  border-2 border-white "
                  />
                  <div className="flex flex-col">
                    <p>
                      <span className="text-white">Name: </span>
                      <span className="font-semibold uppercase">
                        {character.name}
                      </span>
                    </p>
                    <p>
                      <span className="text-white">Location: </span>
                      {character.location.name}
                    </p>
                    <p>
                      <span className="text-white">Status:</span>{" "}
                      {character.status}
                    </p>
                    <p>
                      <span className="text-white">Origin:</span>{" "}
                      {character.origin.name}
                    </p>
                    <p>
                      <span className="text-white">Total Num of Episodes:</span>{" "}
                      {character.episode.length}
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <table className="w-full border-[1px]">
                    <thead>
                      <tr>
                        <th className="underline text-white tracking-wider">
                          Episodes
                        </th>
                        <th className="underline text-white tracking-wider">
                          Episodes Air-date
                        </th>
                      </tr>
                    </thead>

                    {character.episode.map((epi: any) => {
                      return (
                        <tbody key={epi.id}>
                          <tr>
                            <td className="border-[1px]">{epi.episode}</td>
                            <td className="border-[1px]">{epi.air_date}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CharactersInfoModal;
