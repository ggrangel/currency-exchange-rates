import { AppBar, Typography } from '@mui/material'
import './Footer.css'

export default function NavBar () {
  return (
    <>
      <AppBar position='static'>
        <Typography variant='h5'>Currency Exchange Rates</Typography>
      </AppBar>
    </>
  )
}
