interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    if (!response.ok) {
      throw new Error(`fetch error ${response.status}`);
    }
    const users = (await response.json()) as User[];
    console.log(users);
  } catch (err) {
    console.error(`Error:`, err);
  }
}

getUsers();

async function getPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    console.log(response);
    if (!response.ok) {
      throw new Error(`fetch error ${response.status}`);
    }
    const pokemon = (await response.json()) as Pokemon[];
    console.log(pokemon);
  } catch (err) {
    console.log(`Error:`, err);
  }
}

getPokemon();
