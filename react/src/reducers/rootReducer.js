import {
    combineReducers
} from 'redux';
import allDataReducer from './allDataReducer';
import allProductReducer from './allProductReducer';
import allUserReducer from './allUserReducer';

const rootReducer = combineReducers({
    allData: allDataReducer,
    allProductData: allProductReducer,
    allUserData: allUserReducer
});

export default rootReducer;