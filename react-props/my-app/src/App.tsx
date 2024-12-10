import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const imageSRC = '/starry-sky.jpeg';
const captionText = 'A beautiful Image of Space';
const descriptionText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt
      sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
      commodi placeat eveniet, quam voluptates facere et magnam architecto
      quaerat velit voluptas rerum quos asperiores quis in! Nemo aut aliquam
      quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos
      autem? Iusto hic impedit aspernatur labore quos nesciunt? Ad dolore
      pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt
      laborum similique repellat?`;

export default function App() {
  return (
    <>
      <Header headerText="React Image Bank" />
      <Image imageSRC={imageSRC} />
      <Caption captionText={captionText} />
      <Description descriptionText={descriptionText} />
      <Button buttonText="Click For Next Image" />
    </>
  );
}
