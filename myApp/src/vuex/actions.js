import state from './state';
import axios from '../../node_modules/axios';

export const getLogin = (context, args) => {
    axios
        .get("api/User/login", {
            params: {
                username: args.username,
                password: args.password
            }
        }).then(Response => {
            context.commit('getLogin', Response.data.result);
        })
}