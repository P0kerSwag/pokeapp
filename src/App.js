import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import pokebola from './images/pokebola.png'

function App() {
  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] =useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async()=>{
    const res =await fetch(loadMore)
    const data = res.json()
    setLoadMore(data.next)
    console.log(data)
    
    function createPokemonObject(result){
        result.array.forEach(async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()

          setAllPokemons(currentList =>[...currentList,data])
          allPokemons.push(data)
        });
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }

  useEffect(()=>{
    getAllPokemons()
  },[])

  return(
    <div className="App-content">
      <center><h1>P<Pokebola src={pokebola}/>kemon Evolution</h1></center>
      <div className='pokemon-container'>
      <div className='all-container'>
      </div>
      <button className='load-more'>Load More</button>
      </div>
    </div>
  );
}

export default App;

const Pokebola = styled.img`
   width:24px;
   height:24px;  
`;