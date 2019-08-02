import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function allProductReducer(state = initialState.allProduct, action) {

    switch(action.type) {
        case types.GET_ALL_PRODUCT:
        //Object.assign() is added to aviod redux state mutation
        return  action.allProduct;
        default:
            return state;
    }
}