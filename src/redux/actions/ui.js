export const RENDER_GAME = '[ui] render game'
export const NUMBER_SELECT = '[ui] number selected'
export const PLACE_BET = '[ui] place bet'
export const LUCKY_PICK = '[ui] toggle lucky pick'
export const PLACE_STAKE = '[ui] place skate'
export const TOGGLE_MODAL = '[ui] toggle modal'

export const renderGame = () => ({ type: RENDER_GAME })

export const selectNumber = (selectedNumber) => ({ type: NUMBER_SELECT, payload: selectedNumber })

export const placeBet = () => ({ type: PLACE_BET })

export const luckyPick = () => ({ type: LUCKY_PICK })

export const selectStake = (selectedStake) => ({ type: PLACE_STAKE, payload: selectedStake })

export const toggleModal = () => ({ type: TOGGLE_MODAL })
