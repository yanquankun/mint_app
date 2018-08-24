export const getLogin = (state, data) => {
    state.loginResult.msg = data.msg;
    state.loginResult.success = data.success;
}