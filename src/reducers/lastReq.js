import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../actions'

const INITIAL_STATE = {
  lastReqId: 0,
  data: 'Default data',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, lastReqId: action.lastReqId }
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.data }
    default:
      return state
  }
}
