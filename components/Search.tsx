import React, { useState } from "react";
import searchSVG from "../public/search.svg";
import crossSVG from "../public/cross.svg";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../public/queries";
import useCharactersQuery from "../hooks/useCharactersQuery";



function Search({search , setSearch ,refetch}:any) {
  // const [search, setSearch] = useState("");
  // const {refetch} = useCharactersQuery({
  //   search
  // });
  return (
    <div className="flex justify-center items-center">
      <input
        type="string"
        className="border-black border-b-2 my-6 focus:outline-none"
        placeholder="Serach character"
        onChange={(e) => setSearch( e.target.value)}
      />
      
      <div className="flex space-x-2.5">
        <button 
         onClick={() =>
          refetch({
            search: search
          })
        }
        >
        <Image src={searchSVG} alt="search" />

        </button>
        <button 
        onClick={() => setSearch(" ")}
        >

        <Image src={crossSVG} alt="cross" />
        </button>
      </div>

    </div>
  );
}

export default Search;
