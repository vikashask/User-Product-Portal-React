import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function isAuthenticateReducer(state = initialState.allData, action) {

    switch(action.type) {
        case types.GET_IS_AUTHENTICATE:
        //Object.assign() is added to aviod redux state mutation
        return  action.isAuthenticate;
        default:
            return state;
    }
}