import './App.css';
import { useState } from 'react';

type Props = {
  label: string;
  color: string;
};

export function Button({ label }: Props) {
  const [count, setCount] = useState(0);

  console.log('handleClick fired');

  function setColor(): string {
    if (count <= 3) return 'darkpurple';
    if (count <= 6) return 'lightpurple';
    if (count <= 9) return 'orange';
    if (count <= 12) return 'lightorange';
    if (count <= 15) return 'yellow';
    return 'white';
  }

  const color = setColor();

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
        id="hot-button"
        className={`hot-button ${color}`}>
        {label}
      </button>
      <p> Count is {count}</p>
    </>
  );
}
