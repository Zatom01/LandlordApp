import landLordsReducer from './landLordsReducer';
import landLordHousesReducer from './landLordHousesReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    landLordsReducer,
    landLordHousesReducer
})
