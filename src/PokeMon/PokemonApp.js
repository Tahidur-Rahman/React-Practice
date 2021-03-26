import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function PokemonApp() {
  const [pokemon, setpokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPageUrl, setprevPageUrl] = useState();
  const [nextPageUrl, setnextPageUrl] = useState();
  const [loading, setloading] = useState(true)
  function PrevPage(){
    setCurrentPageUrl(prevPageUrl);
}
function NextPage(){
    setCurrentPageUrl(nextPageUrl);
}
  useEffect(() => {
    axios.get(currentPageUrl).then((res) => {
        setloading(false)
      setpokemon(res.data.results.map((p) => p.name));
      setprevPageUrl(res.data.previous);
      setnextPageUrl(res.data.next);
    });
  }, [currentPageUrl]);
  if(loading) return '...loading'
  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <Pagination prevPage={prevPageUrl ? PrevPage : null } nextPage={NextPage}/>
    </div>
  );
}


export default PokemonApp;
