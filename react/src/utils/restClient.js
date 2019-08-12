import * as Constants from "./../utils/Constants";

export default {

    get: async (apiUrl, param) => {
        let response = await fetch(Constants.baseURL + 'product', {
            method: `GET`,
            credentials: `include`,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        var resObj;
        if (response.status === 200) {
            resObj = {
                response: response,
                success: true
            };
            return await resObj;
        } else {
            resObj = {
                response: response,
                success: false
            };
            return await resObj;
        }

    },

    post: () => {

    },

    put: () => {

    },

    delete: async (body) => {
        console.log("----body from rest client", body);

        let response = await fetch(Constants.baseURL + 'product', {
            method: `DELETE`,
            credentials: `include`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        var resObj;
        if (response.status === 200) {
            resObj = {
                response: response,
                success: true
            };
            return await resObj;
        } else {
            resObj = {
                response: response,
                success: false
            };
            return await resObj;
        }
    }
}