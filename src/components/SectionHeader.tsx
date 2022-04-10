interface Props {
  title: string;
}
export default function SectionHeader ({ title }: Props) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}
