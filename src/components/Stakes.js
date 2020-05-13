import React from 'react'
import { createUseStyles } from 'react-jss'

import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  stake: {
    outline: 'none',
    fontSize: '1em',
    margin: '.5em',
    borderRadius: '5px',
    alignItems: 'center',
    textDecoration: 'none',
    background: ' linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
  },
  isDefault: {
    extend: 'stake',
    background: 'green',
    color: 'white'
  },
  inputContainer: {
    height: '100%',
    marginLeft: '5vw'
  },
  input: {
    display: 'inline-block',
    fontWeight: '400',
    color: '#377D6A',
    background: '#efefef',
    borderRadius: '3px'
  },
  label: {
    display: 'inline-block',
    padding: '10px 15px',
    textShadow: '0 1px 0 rgba(19, 74, 70, .4)',
    background: '#7AB893',
    transition: 'all .3s ease-in -out',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px'
  }
})

export const Stakes = (props) => {
  const stakes = []
  const classes = useStyles(props)

  props.stakes.forEach(
    (stake) => {
      const isDefault = stake === props.selectedStake

      stakes.push(
        <button onClick={() => props.placeStake(stake)} key={`stake-${stake}`} className={isDefault ? classes.isDefault : classes.stake}
        >
          <img className={classes.logo} src={process.env.PUBLIC_URL + '/money_dollar.png'} alt={`money-${stake}`} width='10px' />
          {stake}
        </button>
      )
    }
  )

  return (
    <>
      {stakes}
      <div className={classes.inputContainer}>
        <input type='number' id='stake' min='0' value={props.selectedStake} name='playerStake' onChange={e => props.placeStake(e.target.value)} className={classes.inputArea} />
        <label htmlFor='stake' className={classes.label}>Stake</label>
      </div>
    </>
  )
}

Stakes.propTypes = {
  stakes: PropTypes.arrayOf(PropTypes.number),
  selectedStake: PropTypes.number.isRequired,
  placeStake: PropTypes.func.isRequired
}
