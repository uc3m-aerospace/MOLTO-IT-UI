/*eslint no-restricted-globals: ["off", "location"]*/
import axios from 'axios'

export default class Webservice {

    constructor(store) {
        this.store = store;
    }


    post = (path, data = {}, cancelToken) => {
        const state = this.store.getState();
        const {token} = state.admin;
        let config = {
            cancelToken, params: data,
            headers: {'Authorization': 'token' + token.token}
        };
        return axios.post(path, config, {cancelToken}).then(({data}) => data);
    };

    put = (path, data = {}, cancelToken) => {
        const state = this.store.getState();
        const {token} = state.admin;
        let config = {
            cancelToken, params: data,
        };
        return axios.put(path, config, {cancelToken}).then(({data}) => data);
    };

    get = (path, data = {}, cancelToken) => {
        const state = this.store.getState();
        const token = state.admin;
        let config = {
            cancelToken,
            params: data,
            headers: {'Authorization': 'token ' + token.token}
        };
        return axios.get(path, config).then(({data}) => data);
    };
};
