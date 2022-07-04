import React, { useEffect, useState } from "react";
import Image from "next/image";
import loadingSvg from "../public/loading.svg";
import useCharactersQuery from "../hooks/useCharactersQuery";
import CharactersInfoModal from "./CharactersInfoModal";
import Search from "./Search";

export default function Characters() {
  const [page, setPage] = useState(1);
  const [searchCharacters, setSearchCharacters] = useState("");
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState(null);
  const { loading, error, data, getCharacters, fetchMore } =
    useCharactersQuery();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!searchCharacters) {
      getCharacters({
        variables: {
          page,
        },
      });
    }
  }, [page]);

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCharacterInfo(null);
  };

  const openModal = (char: any) => {
    setSelectedCharacterInfo(char);
    setIsOpen(true);
  };
  if (loading) {
    return (
      <div className="text-center">
        <Image src={loadingSvg} alt="search" className="bg-none" />
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;
  const findPage = () => {
    const prev = data && data.characters.info.prev;
    const next = data && data.characters.info.next;
    const current = (next + prev) / 2;

    return {
      prev,
      next,
      current,
    };
  };

  const setNextPage = () => {
    setPage(findPage().next);
    getCharacters({
      variables: {
        search: searchCharacters,
        page: findPage().current,
      },
    });
    fetchMore({
      variables: {
        search: searchCharacters,
        page: findPage().current,
      },
    });
  };
  return (
    <>
      <Search
        searchCharacters={searchCharacters}
        setSearchCharacters={setSearchCharacters}
        getCharacters={getCharacters}
      />

      <div className="text-center space-x-4 flex justify-center">
        <button
          onClick={() => setPage(findPage().prev)}
          disabled={page === 1}
          style={{
            cursor: page === 1 ? "not-allowed" : "pointer",
          }}
          className="border-2 border-black p-1 rounded-md"
        >
          Previous Page
        </button>

        <p className="text-center">
          Showing Page{" "}
          <span className="text-green-500">{findPage().current}</span> out of{" "}
          {data && data.characters.info.pages}
        </p>
        <button
          onClick={setNextPage}
          className="border-2 border-black p-1 rounded-md"
          disabled={page === data && data.characters.info.pages}
        >
          Next Page
        </button>
      </div>

      <div className="flex flex-row h-full flex-wrap justify-evenly">
        {data &&
          data.characters.results.map((char: any) => {
            return (
              <>
                <div
                  key={char.id}
                  className="my-2 relative border-4 border-green-500"
                  onClick={() => openModal(char)}
                >
                  <Image
                    src={char.image}
                    alt={"characterImages"}
                    width={300}
                    height={300}
                  />
                  <h1 className="font-semibold uppercase pl-1"> {char.name}</h1>
                  <p
                    className="absolute top-1 right-2 border-2 border-black rounded-md"
                    style={{
                      backgroundColor:
                        char.status === "Alive" ? "#198754" : "#dc3545",
                      padding: "2px",
                    }}
                  >
                    {char.status}
                  </p>
                </div>
              </>
            );
          })}
        <CharactersInfoModal
          isOpen={isOpen}
          closeModal={closeModal}
          character={selectedCharacterInfo}
        />
      </div>
    </>
  );
}
