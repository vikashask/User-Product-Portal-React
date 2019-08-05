import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function allUserReducer(state = initialState.allUser, action) {

    switch(action.type) {
        case types.GET_ALL_USER:
        //Object.assign() is added to aviod redux state mutation
        return  action.allUser;
        default:
            return state;
    }
}