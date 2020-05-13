import React from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

import { Stakes } from './Stakes'
import { PlaceBet } from './PlaceBet'
import { LuckyPick } from './LuckyPick'

const useStyles = createUseStyles({
  footerContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  stakesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  placeBetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5vh'
  }
})

export const Footer = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.footerContainer}>
      <div className={classes.stakesContainer}>
        <Stakes {...props} />
      </div>
      <div className={classes.placeBetContainer}>
        <PlaceBet {...props} />
        <LuckyPick {...props} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  placeStake: PropTypes.func.isRequired,
  selectedStake: PropTypes.number.isRequired
}
