import React from 'react'
import { createUseStyles } from 'react-jss'

import PropTypes from 'prop-types'
import { mainColor } from '../App'

const useStyles = createUseStyles({
  button: {
    backgroundColor: ({ hasValue, value }) => {
      const basicColor = value > 40 ? '#C42B2B' : '#039ad1'

      if (hasValue) {
        return mainColor
      }

      return basicColor
    },
    width: '100%',
    margin: 'auto',
    padding: 10,
    color: props => props.hasValue ? 'white' : 'black',
    '&:hover': {
      border: [
        [1, 'solid', 'blue']
      ]
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.2',
      border: [1]
    }
  }
})

export const GridItem = (props) => {
  const hasValue = props.selectedNumbers.includes(props.value)
  const isDisabled = (props.hasReachedSelectionLimit && (hasValue === false))

  const classes = useStyles({ hasValue, value: props.value })

  return (
    <button
      disabled={isDisabled}
      value={props.value}
      onClick={e => props.onItemClick(e.target.value)} className={classes.button}
    >
      {props.value}
    </button>
  )
}

GridItem.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  onItemClick: PropTypes.func.isRequired,
  hasReachedSelectionLimit: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
}
