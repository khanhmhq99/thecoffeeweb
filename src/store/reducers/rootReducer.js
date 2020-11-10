import { combineReducers } from 'redux'
import productsReducer from './productReducer'
import itemEditingReducer from './itemEditingReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemEditingReducer,
    product: productsReducer
})

export default rootReducer