import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import * as Constants from "./../utils/Constants";
import client, {
    getOperation
} from "./../utils/restClient";

export default function allProductReducer(state = initialState.allProduct, action) {

    switch (action.type) {
        case types.GET_ALL_PRODUCT:
            return {
                ...state, allProduct: action.payload
            };
            break;

        case types.DELETE_PRODUCT:
            return {
                ...state, delete: action.payload
            }
            break;
        default:
            return state;
    }
}