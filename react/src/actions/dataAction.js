import * as types from './actionTypes';
import client,{getOperation} from "./../utils/restClient";

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

export const loadAllProduct = (allProduct) => {
    
    return async (dispatch) => {
        const repos = await getOperation();
        dispatch({
            type:types.GET_ALL_PRODUCT,
            payload:repos,
        });
    }
}

export const deleteProduct = (product) => {
    
    return {
        type: types.DELETE_PRODUCT,
        payload:product
    }
}

export const loadAllUser = (allUser) => {
    
    return {
        type: types.GET_ALL_USER,
        allUser
    }
}