import { combineReducers } from 'redux';
import products from './products';
import productEditing from './productEditing';
import search from './search';
const appReducers = combineReducers({
    products,
    productEditing,
    search
    
})

export default appReducers