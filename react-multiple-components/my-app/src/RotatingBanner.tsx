import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('currentIndex', currentIndex);

  function handlePrevClick() {
    console.log('handlePrevClick fired');
    if (currentIndex < items.length - 1 || currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (currentIndex <= 0) {
      setCurrentIndex(5);
    }
    console.log('currentIndex Prev', currentIndex);
  }

  function handleNextClick() {
    console.log('handleNextClick fired');
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function handleIndicatorClick(i: number) {
    console.log('handleIndicatorClick fired');
    setCurrentIndex(i);
  }

  return (
    <div>
      <Header title={items[currentIndex]} />
      <PrevButton onHandlePrevClick={handlePrevClick} />
      <Indicators
        onHandleIndicatorClick={handleIndicatorClick}
        count={items.length}
        activeIndex={currentIndex}
      />
      <NextButton onHandleNextClick={handleNextClick} />
    </div>
  );
}

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return <h1>{title}</h1>;
}

type PrevButtonProps = {
  onHandlePrevClick: () => void;
};

export function PrevButton({ onHandlePrevClick }: PrevButtonProps) {
  return (
    <button onClick={onHandlePrevClick} className="square">
      Prev
    </button>
  );
}

type IndicatorProps = {
  count: number;
  activeIndex: number;
  onHandleIndicatorClick: (i: number) => void;
};

export function Indicators({
  count,
  activeIndex,
  onHandleIndicatorClick,
}: IndicatorProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => onHandleIndicatorClick(i)}
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

type NextButtonProps = {
  onHandleNextClick: () => void;
};

export function NextButton({ onHandleNextClick }: NextButtonProps) {
  return (
    <button onClick={onHandleNextClick} className="square">
      Next
    </button>
  );
}
