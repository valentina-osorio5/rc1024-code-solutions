type Props = {
  label: string;
  onHandleClick: () => void;
};

export function Button({ label, onHandleClick }: Props) {
  return <button onClick={onHandleClick}>{label}</button>;
}
