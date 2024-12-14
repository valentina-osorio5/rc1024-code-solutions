import { FormEvent, useState } from 'react';

type SearchableListProps = {
  list: string[];
  items: string[];
};

export function SearchableList({ list }: SearchableListProps) {
  const [userValue, setUserValue] = useState('');

  const filteredItems = list.filter((item) =>
    item.toLowerCase().includes(userValue.toLowerCase())
  );

  return (
    <div className="wrapper">
      <SearchBar userValue={userValue} onSetUserValue={setUserValue} />
      <Items list={list} items={filteredItems} />
    </div>
  );
}

type SearchBarProps = {
  userValue: string;
};

function SearchBar({ userValue, onSetUserValue }: SearchBarProps) {
  return (
    <div>
      <input
        className="search"
        value={userValue}
        name="search"
        onChange={(e) => onSetUserValue(e.target.value)}
        placeholder="search"
      />
    </div>
  );
}

function Items({ items }: SearchableListProps) {
  return (
    <ul>
      {items.length > 0 &&
        items.map((item, index) => <li key={index}>{item}</li>)}
      {items.length === 0 && <p>No items match your search.</p>}
    </ul>
  );
}
