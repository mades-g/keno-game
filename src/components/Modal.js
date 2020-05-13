import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  modal: {
    background: 'white',
    border: '1px solid #ccc',
    transition: '1.1s ease-out',
    filter: 'blur(0)',
    transform: 'scale(1)',
    opacity: '1',
    visibility: 'visible',
    padding: '10px',
    position: 'absolute',
    margin: 'auto',
    width: '50 %',
    left: '37.1vw',
    top: '21vh',
    zIndex: '1'
  },
  actions: {
    borderTop: '1px solid #ccc',
    background: '#eee',
    padding: '0.5rem 1rem'
  },
  toggleButton: {
    border: '0',
    background: '#78f89f',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    fontSize: '0.8rem',
    lineHeight: '1'
  },
  content: {
    padding: '1rem'
  },
  header: {
    borderBottom: '1px solid #ccc',
    padding: '1rem',
    margin: '0',
    textAlign: 'center'
  }
})

export const Modal = (props) => {
  const classes = useStyles()

  if (!props.showModal) {
    return null
  }

  return (
    <div className={classes.modal}>
      <h2 className={classes.header}>Keno Game</h2>
      <div className={classes.content}>{props.children}</div>
      <div className={classes.actions}>
        <button className={classes.toggleButton} onClick={props.toggleModal}>close</button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}
