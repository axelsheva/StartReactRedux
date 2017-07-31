import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  state: (state = 'Welcome to React') => state
})

export default rootReducer
