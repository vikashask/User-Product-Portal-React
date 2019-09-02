import * as types from './actionTypes';
import {getOperation, deleteOperation} from "./../utils/restClient";

/* 
Actions are payloads of information that send data from your application to your store
*/
/**
 * Function to get all data
 * @param {Object Array} allData 
 */
export const loadAllData = (allData) => {
    
    return {
        type: types.GET_ALL_DATA,
        allData
    }
}


export const loadAuthenticate = (isAuthenticate) => {
    console.log("isAuthenticate",isAuthenticate);
    return {
        type: types.GET_IS_AUTHENTICATE,
        isAuthenticate
    }
}

export const loadAllProduct = (allProduct) => {
    
    return async (dispatch) => {
        const repos = await getOperation('product');
        dispatch({
            type:types.GET_ALL_PRODUCT,
            payload:repos,
        });
    }
}

export const loadAllQuestion = (allQuestion) => {
    
    return async (dispatch) =>{
        const repos = await getOperation('question');
        dispatch({
            type :types.GET_ALL_QUESTION,
            payload:repos
        })
    }
}

export const deleteProduct = (product) => {
    
    return async (dispatch) => {
        const repos = await deleteOperation(product);
        dispatch({
            type:types.DELETE_PRODUCT,
            payload:repos,
        });
    }
}

export const loadAllUser = (allUser) => {
    
    return {
        type: types.GET_ALL_USER,
        allUser
    }
}