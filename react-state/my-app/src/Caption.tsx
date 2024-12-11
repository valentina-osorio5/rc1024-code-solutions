import { useState } from 'react';

type Props = {
  caption: string[];
};

export function Caption({ caption }: Props) {
  console.log(useState(0));
  const [index, setIndex] = useState<number>(0);

  function updateIndex() {
    console.log('updateIndex fired');
    if (index < caption.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return <h3 onClick={updateIndex}>{caption[index]}</h3>;
}
