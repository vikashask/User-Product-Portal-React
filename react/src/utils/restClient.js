import * as Constants from "./../utils/Constants";

export default {

    get : () =>{

    },

    post : () =>{

    },

    put : () =>{

    },

    delete :  async (body) => {
        let response = await fetch(Constants.baseURL + 'product',
        {
            method: `DELETE`,
            credentials: `include`,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
        });
        var resObj;
        if(response.status ===200){
            resObj = {response:response,success:true};
            return await resObj;
        }else{
            resObj = {response:response,success:false};
            return await resObj;
        }
    }
}