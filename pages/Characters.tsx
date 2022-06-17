import React, { useState } from 'react'
import Image from "next/image";
import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from '@apollo/client';


export default function Characters() {
  const {loading, error, data : character} = useQuery(GET_ALL_CHARACTERS)
  // const intialState = results;
  // const [search, setSearch] = useState("");
  // const [characters, setCharacters] = useState(intialState.characters);
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  return (
    <div className='flex flex-row h-full flex-wrap justify-evenly'>
      {/* <p>hello</p> */}
            {
              character.characters.results.map((char:any)=>{
                return <div key={char.id} className="my-2 relative border-4 border-green-500">
                 <Image src={char.image} alt={'characterImages'} width={300} height={300} />
                  <h1 className='font-semibold uppercase'> {char.name}</h1>
                  <p className='absolute top-5 right-2 border-2 border-black rounded-md'
                  style={{
                    backgroundColor: char.status === 'Alive' ? '#198754' : '#dc3545',
                    padding:'2px'
                  }}
                  >{char.status}</p>
                  </div>
              })
            }
    </div>
  )
}