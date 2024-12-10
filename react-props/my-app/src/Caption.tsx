type Props = {
  captionText: string;
};

export function Caption({ captionText }: Props) {
  return <h3>{captionText}</h3>;
}
