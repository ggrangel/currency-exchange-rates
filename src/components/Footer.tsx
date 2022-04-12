import { Grid, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import './Footer.css'

export default function Footer () {
  return (
    <>
      <footer>
        <hr color='grey' />
        <Grid
          container
          spacing={5}
          mb={2}
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography>Made by Gustavo Rangel</Typography>
          </Grid>
          <Grid item>
            <Link target='_blank' href='https://github.com/gustavobrangel/'>
              <GitHubIcon />
            </Link>
          </Grid>
        </Grid>
      </footer>
      {/* </Box> */}
    </>
  )
}
