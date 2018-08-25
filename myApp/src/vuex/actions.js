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

export const regisResult = (context, args) => {
    axios
        .get("api/User/regis", {
            params: {
                guid: args.guid,
                username: args.username,
                email: args.email,
                password: args.password,
                phone: args.phone,
                birthday: args.birthday
            }
        }).then(Response => {
            context.commit('regisResult', Response.data.result);
        })
}