import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function allQuestionReducer(state = initialState.allQuestion, action) {

    switch (action.type) {
        case types.GET_ALL_QUESTION:
            return {
                ...state, allQuestion: action.payload
            };
        default:
            return state;
    }
}