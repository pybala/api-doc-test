import axios from 'axios';
var config = require('../../config')


const postApiService = (formData, hasFile) => {
    let config = {};

    /*if ( hasFile ) {
        config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
    }*/

    config = {
        headers: { 'content-type': 'multipart/form-data' }
    };

    let axiosHttp = axios({
        method: 'post',
        //url: 'http://bala.citrix.com/kits/public/services/api-test',
        url: 'https://citrixreadyqa.citrix.com/kits/services/api-test',
        //url: 'https://crvp-qa.sky.citrix.com/services/api-test',
        data: formData,
        config: config
    });

    return new Promise(function(resolve, reject) {
        axiosHttp
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    })
};


export default {
    postApiService
};
