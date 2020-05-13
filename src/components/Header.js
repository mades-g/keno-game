import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  logo: {
    maxWidth: 100,
    maxHeight: 100
  },
  logoContainer: {
    margin: 'auto',
    width: '13%',
    padding: '10px'
  }
})

export const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.logoContainer}>
      <img className={classes.logo} src={process.env.PUBLIC_URL + '/keno-logo.png'} alt='keno' />
    </div>
  )
}
