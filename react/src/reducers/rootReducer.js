import { combineReducers } from 'redux';
import allDataReducer from './allDataReducer';
import allProductReducer from './allProductReducer';

const rootReducer = combineReducers({
    allData:        allDataReducer,
    allProductData:        allProductReducer,
});

export default rootReducer;