import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

import { Modal } from './Modal'
import { GridItem } from './GridItem'

const useStyles = createUseStyles({
  gridContainer: {
    display: 'grid',
    gridGap: '5px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    gridTemplateRows: 'repeat(0, 50px)',
    width: (windowWidth) => {
      switch (true) {
        case windowWidth <= 849:
          return '91%'
        case windowWidth > 1619:
          return '48%'
        case windowWidth <= 1148:
          return '81%'
        default:
          return '50%'
      }
    },
    margin: 'auto'
  }
})

const ListOfErrors = (props) => {
  const errors = []

  if (props.hasReachedSelectionLimit === false) {
    errors.push(<li key={1}>You must select 5 numbers</li>)
  }

  if (props.selectedStake <= 0) {
    errors.push(<li key={2}>Stake value must be more or equal to 1</li>)
  }

  return (
    <ul>
      {errors}
    </ul>
  )
}

export const Grid = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  // workaround to update css based on window.innerWidth
  // since for some reason @media queries is not working with jss
  useEffect(
    () => {
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, []
  )

  const classes = useStyles(windowWidth)

  function renderGrid () {
    const grid = []

    for (let index = 1; index <= props.size; index++) {
      grid.push(
        <GridItem
          {...props}
          value={index}
          key={`btn-${index}`}
          hasReachedSelectionLimit={props.hasReachedSelectionLimit}
        />
      )
    }

    return grid
  }

  return (
    <div className={classes.gridContainer}>
      <Modal {...props}>
        {props.isValidBet ? 'Gongratulations you won ;)' : <ListOfErrors {...props}/>}
      </Modal>
      {renderGrid()}
    </div>
  )
}

Grid.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  hasReachedSelectionLimit: PropTypes.bool.isRequired,
  isValidBet: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired
}

ListOfErrors.propTypes = {
  hasReachedSelectionLimit: PropTypes.bool.isRequired,
  selectedStake: PropTypes.number.isRequired
}
