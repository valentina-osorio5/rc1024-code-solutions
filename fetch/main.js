'use strict';
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    if (!response.ok) {
      throw new Error(`fetch error ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.error(`Error:`, err);
  }
}
getUsers();
async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    console.log(response);
    if (!response.ok) {
      throw new Error(`fetch error ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (err) {
    console.log(`Error:`, err);
  }
}
getPokemon();
