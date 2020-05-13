import * as uiActions from '../actions/ui'

export const uiFlow = ({ dispatch, getState }) => next => action => {
  next(action)

  if (action.type === uiActions.TOGGLE_MODAL) {
    const { isValidBet } = getState()

    if (isValidBet) {
      dispatch(uiActions.renderGame())
    }
  }
}

export const uiMdlw = [uiFlow]
