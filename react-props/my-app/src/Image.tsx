import './Image.css';

type Props = {
  imageSRC: string;
};

export function Image({ imageSRC }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imageSRC} alt="space-image" />
      </div>
    </div>
  );
}
