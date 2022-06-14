import React, { useState } from 'react'
import Image from "next/image";

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
// import characters from '../graphql/character/characters'

export default function Characters( character:any) {
  console.log({character})
  // const intialState = results;
  // const [search, setSearch] = useState("");
  // const [characters, setCharacters] = useState(intialState.characters);
  
  return (
    <div>
            {
              character.character.map((char:any)=>{
                return <div key={char.id}>
                 <Image src={char.image} alt={'characterImages'} width={300} height={300} />
                  <h1>{char.name}</h1>
                  </div>
              })
            }
    </div>
  )
}

// export default Characters


// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: "https://rickandmortyapi.com/graphql",
//     cache: new InMemoryCache(),
//   });
//   const { data } = await client.query({
//     query: gql`
//       query {
//         characters(page: 1) {
//           info {
//             count
//             pages
//           }
//           results {
//             name
//             id
//             location {
//               name
//               id
//             }
//             image
//             origin {
//               name
//               id
//             }
//             episode {
//               id
//               episode
//               air_date
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       characters: data.characters.results,
//     },
//   };
// }