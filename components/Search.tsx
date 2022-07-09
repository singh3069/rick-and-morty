import React, { useEffect, useState } from "react";
import searchSVG from "../public/search.svg";
import crossSVG from "../public/cross.svg";
import Image from "next/image";
import { useRef } from "react";

function Search({
  searchCharacters,
  setSearchCharacters,
  getCharacters,
  data,
}: any) {
  const characterName =
    data && data.characters.results.map((char: any) => char.name);

  const getSearchCharacters = () => {
    if (!searchCharacters) {
      alert("Please enter a character name");
      getCharacters({
        variables: { page: 1 },
      });
    }

    getCharacters({
      variables: { search: searchCharacters },
    });
  };
  const removeSearchCharacters = () => {
    getCharacters();
    setSearchCharacters("");
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        className="border-[#953ffa] bg-transparent text-white placeholder-white  border-b-2 my-6 focus:outline-none"
        placeholder="Search character"
        value={searchCharacters}
        // ref={inputRef}
        onChange={(e) => setSearchCharacters(e.target.value)}
      />

      <div className="flex space-x-2.5">
        <button
          onClick={getSearchCharacters}
          className="flex justify-center items-center"
        >
          <Image src={searchSVG} alt="search" />
        </button>
        <button
          type="reset"
          onClick={removeSearchCharacters}
          className="flex justify-center items-center"
        >
          <Image src={crossSVG} alt="cross" />
        </button>
      </div>
    </div>
  );
}

export default Search;
