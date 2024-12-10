type Props = {
  buttonText: string;
};

export function Button({ buttonText }: Props) {
  return <button>{buttonText}</button>;
}
