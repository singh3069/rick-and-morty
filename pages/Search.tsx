import React, { useState } from "react";
import searchSVG from "../public/search.svg";
import crossSVG from "../public/cross.svg";
import Image from "next/image";



function Search() {
  return (
    <div className="flex justify-center items-center">
      <input
        type="search"
        className="border-black border-b-2 my-6 focus:outline-none"
        placeholder="Serach character"
      />
      <div className="flex space-x-2">
        <Image src={searchSVG} alt="search" />
        <Image src={crossSVG} alt="search" />
      </div>

    </div>
  );
}

export default Search;
