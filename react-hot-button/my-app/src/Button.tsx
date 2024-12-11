import './App.css';
import { useState } from 'react';

type Props = {
  label: string;
  color: string;
};

export function Button({ label }: Props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log('handleClick fired');
    setCount(count + 1);
    setColor();

    function setColor() {
      if (count <= 3) {
        color = 'darkpurple';
      }
      if (count <= 6) {
        color = 'lightpurple';
      }
      if (count <= 9) {
        color = 'orange';
      }
      if (count <= 12) {
        color = 'lightorange';
      }
      if (count <= 15) {
        color = 'yellow';
      }
      if (count <= 18) {
        color = 'white';
      }
      return color;
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        id="hot-button"
        className={`hot-button ${color}`}>
        {label}
      </button>
      <p> Count is {count}</p>
    </>
  );
}
