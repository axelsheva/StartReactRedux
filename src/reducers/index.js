import { combineReducers } from 'redux'
import lastReq from './lastReq'

const rootReducer = combineReducers({
  state: (state = 'Welcome to React') => state,
  lastReq,
})

export default rootReducer
