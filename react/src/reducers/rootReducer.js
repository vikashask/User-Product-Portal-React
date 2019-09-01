import {
    combineReducers
} from 'redux';
import allDataReducer from './allDataReducer';
import allProductReducer from './allProductReducer';
import allUserReducer from './allUserReducer';
import allQuestionReducer from './allQuestionReducer';
import isAuthenticateReducer from './isAuthenticateReducer';

const rootReducer = combineReducers({
    allData: allDataReducer,
    allProductData: allProductReducer,
    allUserData: allUserReducer,
    allQuestion: allQuestionReducer,
    isAuthenticate:isAuthenticateReducer
});

export default rootReducer;