import React, { useEffect, useState } from "react";
import Image from "next/image";
import loadingSvg from "../public/loading.svg";
import useCharactersQuery from "../hooks/useCharactersQuery";
import CharactersInfoModal from "./CharactersInfoModal";
import Search from "./Search";
import InfiniteScroll from "react-infinite-scroll-component";
import CharacterInfo from "./CharacterInfo";
import NextAndPreviousBttn from "./NextAndPreviousBttn";

export default function Characters() {
  const [page, setPage] = useState(1);
  const [searchCharacters, setSearchCharacters] = useState("");
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data, getCharacters, fetchMore } =
    useCharactersQuery();

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
    const prev = data?.characters?.info?.prev ?? 0;
    const next = data && data.characters.info.next;
    const current = prev + 1;

    return {
      prev,
      next,
      current,
    };
  };

  const getNextPage = () => {
    const next = findPage().next;
    setPage(next);
    getCharacters({
      variables: {
        search: searchCharacters,
        page: next,
      },
    });
  };

  const getPreviousPage = () => {
    // we are setting the page and using it the same time thats why we are storing the next page num and then setting it to the page state doing it because it causes async issues
    const prev = findPage().prev;
    setPage(prev);
    getCharacters({
      variables: {
        search: searchCharacters,
        page: prev,
      },
    });
  };

  return (
    <div>
      <div className="md:flex justify-between  py-5">
        <header
          className="cursor-pointer"
          onClick={() => {
            getCharacters();
            setSearchCharacters("");
          }}
        >
          <h1 className="text-5xl font-semibold  font-serif py-3 text-zinc-800">
            Rick And Morty
          </h1>
        </header>
        <Search
          searchCharacters={searchCharacters}
          setSearchCharacters={setSearchCharacters}
          getCharacters={getCharacters}
          data={data}
        />
      </div>

      <NextAndPreviousBttn
        // setPage={setPage}
        page={page}
        getNextPage={getNextPage}
        findPage={findPage}
        data={data}
        getPreviousPage={getPreviousPage}
      />

      <div className="flex flex-row h-full flex-wrap justify-evenly">
        {data &&
          data.characters.results.map((char: any, i: number) => {
            return <CharacterInfo char={char} key={i} openModal={openModal} />;
          })}

        <CharactersInfoModal
          isOpen={isOpen}
          closeModal={closeModal}
          character={selectedCharacterInfo}
        />
      </div>
    </div>
  );
}
