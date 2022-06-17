import React, { useState } from "react";
import searchSVG from "../public/search.svg";
import crossSVG from "../public/cross.svg";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./queries";



function Search() {
  const [search, setSearch] = useState('');
  const {loading, error, data , refetch} = useQuery(GET_ALL_CHARACTERS , {
    variables: {
      search: search
    }
  })
  console.log({search})
  return (
    <div className="flex justify-center items-center">
      <input
        type="search"
        className="border-black border-b-2 my-6 focus:outline-none"
        placeholder="Serach character"
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="flex space-x-2.5">
        <button>
        <Image src={searchSVG} alt="search" />

        </button>
        <button>

        <Image src={crossSVG} alt="search" />
        </button>
      </div>

    </div>
  );
}

export default Search;
