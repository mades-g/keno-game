import * as uiActions from '../actions/ui'

const initialState = {
  stakes: [50, 100, 200, 500, 1000],
  gridSize: 80,
  numberOfSelections: 5,
  selectedNumbers: [],
  isLuckyPick: false,
  credits: 0,
  selectedStake: 0,
  isValidBet: false,
  showModal: false
}

function generatedLuckPickNumbers (size, length) {
  let cont = 1
  const luckyPickNumbers = []

  while (cont <= size) {
    let luckyPick = Math.floor(Math.random() * length) + 1

    while (luckyPickNumbers.includes(luckyPick)) {
      // we don't wanted repeated lucky picks
      luckyPick = Math.floor(Math.random() * length) + 1
    }

    luckyPickNumbers.push(luckyPick)

    cont++
  }

  return luckyPickNumbers
};

export function uiReducer (state = initialState, action) {
  switch (action.type) {
    case uiActions.RENDER_GAME:
      return initialState

    case uiActions.TOGGLE_MODAL: {
      const showModal = !state.showModal

      return {
        ...state,
        showModal
      }
    }

    case uiActions.NUMBER_SELECT: {
      const selectedNumber = Number(action.payload)
      const selectedNumbers = state.selectedNumbers.slice()

      if (selectedNumbers.includes(selectedNumber)) {
        return {
          ...state,
          selectedNumbers: selectedNumbers.filter(number => number !== selectedNumber),
          isLuckyPick: false
        }
      }

      // max limit of possible selection reached
      // TODO: show pop message?
      if (selectedNumbers.length === state.numberOfSelections) return state

      return {
        ...state,
        selectedNumbers: [...selectedNumbers, selectedNumber],
        isLuckyPick: false
      }
    }
    case uiActions.LUCKY_PICK: {
      const isLuckyPick = !state.isLuckyPick

      return {
        ...state,
        isLuckyPick,
        selectedNumbers: generatedLuckPickNumbers(state.numberOfSelections, state.gridSize)
      }
    }

    case uiActions.PLACE_STAKE: {
      if (action.payload === undefined) {
        return {
          ...state
        }
      }

      const selectedStake = Number(action.payload)

      return {
        ...state,
        selectedStake: selectedStake === 0 ? '' : selectedStake
      }
    }

    case uiActions.PLACE_BET: {
      const { selectedNumbers, numberOfSelections, selectedStake } = state
      const isValidNumberOfSelections = numberOfSelections === selectedNumbers.length
      const isValidSelectedStake = selectedStake >= 1

      return {
        ...state,
        isValidBet: isValidNumberOfSelections && isValidSelectedStake,
        showModal: true
      }
    }

    default:
      return state
  }
}
