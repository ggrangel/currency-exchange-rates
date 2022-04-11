import { Typography } from '@mui/material'

interface Props {
  title: string;
}

export default function SectionHeader ({ title }: Props) {
  return (
    <>
      <Typography sx={{ fontWeight: 600 }} variant='h4' mt={4} gutterBottom>
        {title}
      </Typography>
    </>
  )
}
