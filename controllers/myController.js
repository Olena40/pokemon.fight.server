import fs from "fs";

// 1. Option file zu importieren / als JSON
let rawdata = fs.readFileSync("./file.json");
let pokemonData = JSON.parse(rawdata);

export const pokemons = (req, res) => {
  res.json(pokemonData);
};

export const pokemonId = (req, res) => {
  let { id } = req.params;
  let pokemon = pokemonData.find((pokemon) => pokemon.id === parseInt(id));
  res.json(pokemon);
};

export const pokemonInfo = (req, res) => {
  const { id, info } = req.params;
  let pokemon = pokemonData.find((pokemon) => pokemon.id === parseInt(id));
  res.json(pokemon[info]);
};
