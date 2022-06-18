import type { NextPage } from 'next'
import Head from 'next/head'
import Characters from '../components/Characters'
import Search from '../components/Search'
import { useState } from 'react';
import Footer from '../components/Footer';
import CharactersQuery from "../public/hooks/CharactersQuery";




const Home: NextPage = () => {
  // const intialState = results;
  // const [search, setSearch] = useState("");
  // const [characters, setCharacters] = useState(intialState.characters);
  // const { loading } = CharactersQuery();
  // console.log(loading);
  return (
    <div>
    <div className='flex flex-col px-16'>
      <Head>
        <title>Rick And Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full h-20 justify-center items-center flex ">
        <h1 className='text-5xl font-semibold font-serif py-3'
        
        >
          Rick And Morty
        </h1>
      </header>
      <Search/>
      <Characters/>
    </div>
    {/* {
      loading === true ? <div></div> : <Footer/>
    } */}
    <Footer/>
    </div>
  )
}

export default Home
