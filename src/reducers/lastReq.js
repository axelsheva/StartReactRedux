import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../actions'

const INITIAL_STATE = {
  lastReqTime: 0,
  data: 'Default data',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, lastReqTime: action.time }
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.data }
    default:
      return state
  }
}
