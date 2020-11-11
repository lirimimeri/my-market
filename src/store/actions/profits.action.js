import * as actionTypes from './actionTypes'

export const profits = (loadedData) => {
  return {
    type: actionTypes.PROFITS,
    profits: loadedData
  }
}

