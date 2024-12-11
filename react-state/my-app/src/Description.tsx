import { useState } from 'react';

type Props = {
  description: string[];
};

export function Description({ description }: Props) {
  console.log(useState(0));
  const [index, setIndex] = useState<number>(0);

  function updateIndex() {
    console.log('updateIndex fired');
    if (index < description.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return <p onClick={updateIndex}>{description[index]}</p>;
}
