import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }) {
  // const [count, setCount] = useState(0);
  console.log(items);

  return (
    <div>
      <Header items={items[2]} />
      <PrevButton />
      <Indicators />
      <NextButton />
    </div>
  );
}

export function Header({ items }) {
  return <h1>{items}</h1>;
}

export function PrevButton() {
  return <h2 className="square">Prev</h2>;
}

export function Indicators() {
  // const buttons = [];
  // for (let i = 0; i < count; i++) {
  //   buttons.push(<button>Label</button>);
  // }
  return;
  <>
    <p>0</p>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
  </>;
}

export function NextButton() {
  return <h2 className="square">Next</h2>;
}
