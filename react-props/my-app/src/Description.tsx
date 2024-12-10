type Props = {
  descriptionText: string;
};

export function Description({ descriptionText }: Props) {
  return <p>{descriptionText}</p>;
}
