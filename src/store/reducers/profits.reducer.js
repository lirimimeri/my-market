import * as actionTypes from '../actions/actionTypes'

const initialState = {
  profits: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFITS: 
      return {
        ...state,
        profits: action.profits
      }
    default: return state
  }
}

export default reducer