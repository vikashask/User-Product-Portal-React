import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import * as Constants from "./../utils/Constants";
import client,{getOperation} from "./../utils/restClient";

export default function allProductReducer(state = initialState.allProduct, action) {

    switch(action.type) {
        case types.GET_ALL_PRODUCT:
        return {...state,allProduct:action.payload};
        break;

        case types.DELETE_PRODUCT:
                let body = { '_id': action.productId};
                console.log("---action",action);
                if( action.productId){
                client.delete({ '_id': action.payload.productId})
                .then(data => {
                    if(data.success=== true){
                        console.log('final call data',data);
                        state.productList.splice(action.payload.index, 1)
                        return  state.productList;
                    }else{
                        console.log("deleteRes 2",data);
                        return state
                    }
                }
            ); 
                }
                break;
        default:
            return state;
    }
}