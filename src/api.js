import axios from 'axios';
import conf from '../conf/conf';

class Api{


    async postReq(endpoint, body){
        try {

            const response = await axios.post(`${conf.backendBaseUrl}/travelnworld/${endpoint}`, body);

            console.log("esponse logout", response);
            return response.data;
        } catch (error) {
            throw error?.response?.data;
        }
    }


    async getReq(endpoint){
        try {

            const response = await axios.get(`${conf.backendBaseUrl}/travelnworld/${endpoint}`);

            console.log("esponse logout", response);
            return response.data;
        } catch (error) {
            throw error?.response?.data;
        }
    }

    async deleteReq(endpoint, id){
        try {
            const response = await axios.delete(`${conf.backendBaseUrl}/travelnworld/${endpoint}/${id}`);

            return response.data;
        } catch (error) {
            throw error?.response?.data;
        }
    }


    async view(endpoint, id){
    try {
        const response = await axios.get(`${conf.backendBaseUrl}/travelnworld/${endpoint}/${id}`);

        return response.data;
    } catch (error) {
        throw error?.response?.data;
    }
    }
}

const api = new Api();

export default api;