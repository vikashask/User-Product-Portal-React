import {
    combineReducers
} from 'redux';
import allDataReducer from './allDataReducer';
import allProductReducer from './allProductReducer';
import allUserReducer from './allUserReducer';
import isAuthenticateReducer from './isAuthenticateReducer';

const rootReducer = combineReducers({
    allData: allDataReducer,
    allProductData: allProductReducer,
    allUserData: allUserReducer,
    isAuthenticate:isAuthenticateReducer
});

export default rootReducer;