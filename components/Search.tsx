import React, { useEffect, useState } from "react";
import searchSVG from "../public/search.svg";
import crossSVG from "../public/cross.svg";
import Image from "next/image";
import { useRef } from "react";

function Search({ searchCharacters, setSearchCharacters, refetch }: any) {
  const inputRef = useRef(document.createElement("input"));
  const getSearchCharacters = () => {
    // e.preventDefault();
    setSearchCharacters(inputRef.current.value);
    // setSearchCharacters(inputRef.current.value);
    refetch({
      search: searchCharacters,
    });
  };

  useEffect(() => {
    console.log(inputRef.current);
  }, [inputRef]);

  return (
    <div className="flex justify-center items-center">
      {/* <form className=""> */}
      <input
        type="text"
        className="border-black border-b-2 my-6 focus:outline-none"
        placeholder="Search character"
        // value={searchCharacters}
        ref={inputRef}
        // onChange={(e) => setSearchCharacters(e.target.value)}
      />

      <div className="flex space-x-2.5">
        <button
          onClick={getSearchCharacters}
          // onClick={() =>
          //   refetch({
          //     search: searchCharacters,
          //   })
          // }
          type="submit"
        >
          <Image src={searchSVG} alt="search" />
        </button>
        <button type="reset" onClick={() => setSearchCharacters(" ")}>
          <Image src={crossSVG} alt="cross" />
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}

export default Search;
