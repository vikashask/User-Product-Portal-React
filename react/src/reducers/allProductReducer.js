import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import * as Constants from "./../utils/Constants";
import client from "./../utils/restClient";

export default function allProductReducer(state = initialState.allProduct, action) {

    switch(action.type) {
        case types.GET_ALL_PRODUCT:
        //Object.assign() is added to aviod redux state mutation
        return  action.allProduct;

        case types.DELETE_PRODUCT:
                let body = { '_id': action.productId};
                client.delete(body)
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
        default:
            return state;
    }
}