import './Image.css';

type Props = {
  image: string;
};

export function Image({ image }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={image} alt="space-image" />
      </div>
    </div>
  );
}
