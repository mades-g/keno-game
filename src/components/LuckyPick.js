import React from 'react'
import { createUseStyles } from 'react-jss'

import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  luckyPickBtn: {
    fontSize: '1em',
    margin: '.5em',
    borderRadius: '5px',
    alignItems: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
  }
})

export const LuckyPick = (props) => {
  const classes = useStyles()

  return (
    <button className={classes.luckyPickBtn} onClick={props.luckyPick}>Lucky Pick</button>
  )
}

LuckyPick.propTypes = {
  luckyPick: PropTypes.func.isRequired
}
