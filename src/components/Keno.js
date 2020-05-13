import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { Grid } from './Grid'
import { Header } from './Header'
import { Footer } from './Footer'
import { placeBet, selectNumber, luckyPick, selectStake, toggleModal } from '../redux/actions/ui'

function Keno ({ dispatch, keno }) {
  const hasReachedSelectionLimit = keno.numberOfSelections === keno.selectedNumbers.length

  return (
    <>
      <Header />
      <Grid
        size={keno.gridSize}
        selectedNumbers={keno.selectedNumbers}
        hasReachedSelectionLimit={hasReachedSelectionLimit}
        onItemClick={(e) => dispatch(selectNumber(e))}
        isValidBet={keno.isValidBet}
        toggleModal={() => dispatch(toggleModal())}
        {...keno}
      />
      <Footer
        stakes={keno.stakes}
        selectedStake={keno.selectedStake}
        placeBet={() => dispatch(placeBet())}
        luckyPick={() => dispatch(luckyPick())}
        placeStake={(e) => dispatch(selectStake(e))}
      />
    </>
  )
}

const mapStateToProps = state => ({
  keno: state
})

Keno.propTypes = {
  stakes: PropTypes.arrayOf(PropTypes.number),
  selectedStake: PropTypes.arrayOf(PropTypes.number),
  dispatch: PropTypes.func.isRequired,
  keno: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(Keno)
