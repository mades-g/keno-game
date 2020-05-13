import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  placeBetBtn: {
    fontSize: '1em',
    margin: '.5em',
    borderRadius: '5px',
    alignItems: 'center',
    textDecoration: 'none',
    background: 'green'
  }
})

export const PlaceBet = (props) => {
  const styles = useStyles()

  return (
    <button onClick={props.placeBet} className={styles.placeBetBtn} >Place Bet</button>
  )
}

PlaceBet.propTypes = {
  placeBet: PropTypes.func.isRequired
}
