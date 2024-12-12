import { useState } from 'react'
import './App.css'
import { RotatingBanner } from './RotatingBanner';

export default function App() {

  const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
  ];
  
  console.log(items);

  return (
    <>
    < RotatingBanner items={items}/>
    </>

  )
}
