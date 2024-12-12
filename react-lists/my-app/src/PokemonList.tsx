import { Fragment } from 'react';

type Pokemon = {
  number: number;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  console.log(pokedex);
  const listItems = pokedex.map((pokemon) => {
    return (
      <Fragment key={pokemon.number}>
        <li>{pokemon.name}</li>
      </Fragment>
    );
  });
  return <ul>{listItems}</ul>;
}
