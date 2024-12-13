import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // const [count, setCount] = useState(0);
  console.log(items);

  return (
    <div>
      <Header title={items[2]} />
      <PrevButton />
      <Indicators count={items.length} activeIndex={0} />
      <NextButton />
    </div>
  );
}

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  console.log('title prop Header', title);
  return <h1>{title}</h1>;
}

export function PrevButton() {
  return <button className="square">Prev</button>;
}

type IndicatorProps = {
  count: number;
  activeIndex: number;
};

export function Indicators({ count, activeIndex }: IndicatorProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{
          backgroundColor: activeIndex === i ? 'lightblue' : 'white',
          color: 'black',
        }}
        key={i}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}

export function NextButton() {
  return <button className="square">Next</button>;
}
